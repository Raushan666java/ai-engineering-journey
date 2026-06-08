# Module 11: Storage Management

## Mass Storage Structure

### Magnetic Disks
```c
struct disk_geometry {
    int cylinders;
    int heads;
    int sectors_per_track;
    int bytes_per_sector;
    int total_capacity;
};

struct disk_request {
    int cylinder;
    int head;
    int sector;
    int operation;  // READ or WRITE
    void *buffer;
    struct disk_request *next;
};

// Calculate physical address
int calculate_disk_address(struct disk_geometry *disk, int cylinder, int head, int sector) {
    return (cylinder * disk->heads + head) * disk->sectors_per_track + sector;
}
```

### Solid State Drives (SSD)
```c
struct ssd_info {
    int total_blocks;
    int block_size;
    int page_size;
    int pages_per_block;
    bool *bad_blocks;
    int wear_level_threshold;
};

struct ssd_controller {
    struct ssd_info info;
    int *block_erase_count;
    bool *valid_pages;
    struct translation_table *ftl;  // Flash Translation Layer
};
```

## Disk Scheduling Algorithms

### FCFS (First-Come, First-Served)
```c
void fcfs_schedule(struct disk_request *requests) {
    struct disk_request *current = requests;
    int total_seek_time = 0;
    int current_cylinder = 0;
    
    while (current) {
        int seek_distance = abs(current->cylinder - current_cylinder);
        total_seek_time += seek_distance;
        
        printf("Move from cylinder %d to %d (distance: %d)\n", 
               current_cylinder, current->cylinder, seek_distance);
        
        current_cylinder = current->cylinder;
        current = current->next;
    }
    
    printf("Total seek time: %d\n", total_seek_time);
}
```

### SSTF (Shortest Seek Time First)
```c
void sstf_schedule(struct disk_request *requests, int num_requests) {
    bool serviced[num_requests];
    memset(serviced, false, sizeof(serviced));
    
    int current_cylinder = 0;
    int total_seek_time = 0;
    
    for (int i = 0; i < num_requests; i++) {
        int min_seek = INT_MAX;
        int next_request = -1;
        
        // Find closest request
        for (int j = 0; j < num_requests; j++) {
            if (!serviced[j]) {
                int seek_distance = abs(requests[j].cylinder - current_cylinder);
                if (seek_distance < min_seek) {
                    min_seek = seek_distance;
                    next_request = j;
                }
            }
        }
        
        if (next_request != -1) {
            serviced[next_request] = true;
            total_seek_time += min_seek;
            current_cylinder = requests[next_request].cylinder;
            
            printf("Service request at cylinder %d (seek: %d)\n", 
                   current_cylinder, min_seek);
        }
    }
    
    printf("Total seek time: %d\n", total_seek_time);
}
```

### SCAN (Elevator Algorithm)
```c
void scan_schedule(struct disk_request *requests, int num_requests, 
                   int start_cylinder, int max_cylinder, bool direction_up) {
    // Sort requests by cylinder number
    qsort(requests, num_requests, sizeof(struct disk_request), compare_cylinders);
    
    int current_cylinder = start_cylinder;
    int total_seek_time = 0;
    
    if (direction_up) {
        // Service requests in upward direction
        for (int i = 0; i < num_requests; i++) {
            if (requests[i].cylinder >= current_cylinder) {
                int seek_distance = requests[i].cylinder - current_cylinder;
                total_seek_time += seek_distance;
                current_cylinder = requests[i].cylinder;
                
                printf("Service request at cylinder %d (seek: %d)\n", 
                       current_cylinder, seek_distance);
            }
        }
        
        // Go to end and reverse direction
        if (current_cylinder < max_cylinder) {
            total_seek_time += (max_cylinder - current_cylinder);
            current_cylinder = max_cylinder;
        }
        
        // Service remaining requests in downward direction
        for (int i = num_requests - 1; i >= 0; i--) {
            if (requests[i].cylinder < start_cylinder) {
                int seek_distance = current_cylinder - requests[i].cylinder;
                total_seek_time += seek_distance;
                current_cylinder = requests[i].cylinder;
                
                printf("Service request at cylinder %d (seek: %d)\n", 
                       current_cylinder, seek_distance);
            }
        }
    }
    
    printf("Total seek time: %d\n", total_seek_time);
}
```

### C-SCAN (Circular SCAN)
```c
void c_scan_schedule(struct disk_request *requests, int num_requests, 
                     int start_cylinder, int max_cylinder) {
    qsort(requests, num_requests, sizeof(struct disk_request), compare_cylinders);
    
    int current_cylinder = start_cylinder;
    int total_seek_time = 0;
    
    // Service requests from current position to end
    for (int i = 0; i < num_requests; i++) {
        if (requests[i].cylinder >= current_cylinder) {
            int seek_distance = requests[i].cylinder - current_cylinder;
            total_seek_time += seek_distance;
            current_cylinder = requests[i].cylinder;
            
            printf("Service request at cylinder %d (seek: %d)\n", 
                   current_cylinder, seek_distance);
        }
    }
    
    // Jump to beginning (circular)
    if (current_cylinder < max_cylinder) {
        total_seek_time += (max_cylinder - current_cylinder);
        total_seek_time += max_cylinder;  // Jump to cylinder 0
        current_cylinder = 0;
    }
    
    // Service remaining requests from beginning
    for (int i = 0; i < num_requests; i++) {
        if (requests[i].cylinder < start_cylinder) {
            int seek_distance = requests[i].cylinder - current_cylinder;
            total_seek_time += seek_distance;
            current_cylinder = requests[i].cylinder;
            
            printf("Service request at cylinder %d (seek: %d)\n", 
                   current_cylinder, seek_distance);
        }
    }
    
    printf("Total seek time: %d\n", total_seek_time);
}
```

### LOOK and C-LOOK
```c
void look_schedule(struct disk_request *requests, int num_requests, 
                   int start_cylinder, bool direction_up) {
    qsort(requests, num_requests, sizeof(struct disk_request), compare_cylinders);
    
    int current_cylinder = start_cylinder;
    int total_seek_time = 0;
    
    if (direction_up) {
        // Service requests in upward direction
        for (int i = 0; i < num_requests; i++) {
            if (requests[i].cylinder >= current_cylinder) {
                int seek_distance = requests[i].cylinder - current_cylinder;
                total_seek_time += seek_distance;
                current_cylinder = requests[i].cylinder;
                
                printf("Service request at cylinder %d (seek: %d)\n", 
                       current_cylinder, seek_distance);
            }
        }
        
        // Reverse direction (no need to go to end)
        for (int i = num_requests - 1; i >= 0; i--) {
            if (requests[i].cylinder < start_cylinder) {
                int seek_distance = current_cylinder - requests[i].cylinder;
                total_seek_time += seek_distance;
                current_cylinder = requests[i].cylinder;
                
                printf("Service request at cylinder %d (seek: %d)\n", 
                       current_cylinder, seek_distance);
            }
        }
    }
    
    printf("Total seek time: %d\n", total_seek_time);
}
```

## Disk Management

### Disk Formatting
```c
struct disk_format_info {
    int sector_size;
    int sectors_per_track;
    int tracks_per_cylinder;
    int cylinders;
    int interleave_factor;
    int spare_sectors;
};

int low_level_format(struct disk_format_info *format) {
    // Physical formatting - create sectors and tracks
    for (int cylinder = 0; cylinder < format->cylinders; cylinder++) {
        for (int head = 0; head < format->tracks_per_cylinder; head++) {
            for (int sector = 0; sector < format->sectors_per_track; sector++) {
                create_sector_header(cylinder, head, sector);
                initialize_sector_data(format->sector_size);
                create_sector_trailer();
            }
        }
    }
    
    // Mark bad sectors
    scan_and_mark_bad_sectors();
    
    return 0;
}

int high_level_format(const char *filesystem_type) {
    // Create file system structures
    create_boot_block();
    create_superblock();
    create_inode_table();
    create_data_blocks();
    create_free_space_management();
    
    return 0;
}
```

### Boot Block
```c
struct boot_block {
    char boot_code[446];
    struct partition_entry partitions[4];
    unsigned short signature;  // 0xAA55
};

struct partition_entry {
    unsigned char status;       // 0x80 = bootable
    unsigned char start_head;
    unsigned char start_sector;
    unsigned char start_cylinder;
    unsigned char partition_type;
    unsigned char end_head;
    unsigned char end_sector;
    unsigned char end_cylinder;
    unsigned int start_lba;
    unsigned int size_in_sectors;
};
```

### Bad Block Management
```c
struct bad_block_list {
    int bad_blocks[MAX_BAD_BLOCKS];
    int count;
};

struct spare_sector_pool {
    int spare_sectors[MAX_SPARE_SECTORS];
    int available_count;
};

int handle_bad_block(int bad_block_number) {
    // Add to bad block list
    if (bad_block_list.count < MAX_BAD_BLOCKS) {
        bad_block_list.bad_blocks[bad_block_list.count++] = bad_block_number;
    }
    
    // Allocate spare sector
    if (spare_sector_pool.available_count > 0) {
        int spare_sector = spare_sector_pool.spare_sectors[--spare_sector_pool.available_count];
        
        // Update mapping table
        update_sector_mapping(bad_block_number, spare_sector);
        
        return spare_sector;
    }
    
    return -1;  // No spare sectors available
}
```

## RAID Systems

### RAID 0 (Striping)
```c
struct raid0_config {
    int num_disks;
    int stripe_size;
    struct disk_info disks[MAX_DISKS];
};

int raid0_read(struct raid0_config *raid, int logical_block, void *buffer) {
    int stripe_number = logical_block / raid->stripe_size;
    int disk_number = stripe_number % raid->num_disks;
    int physical_block = (stripe_number / raid->num_disks) * raid->stripe_size + 
                        (logical_block % raid->stripe_size);
    
    return read_disk(&raid->disks[disk_number], physical_block, buffer);
}

int raid0_write(struct raid0_config *raid, int logical_block, const void *buffer) {
    int stripe_number = logical_block / raid->stripe_size;
    int disk_number = stripe_number % raid->num_disks;
    int physical_block = (stripe_number / raid->num_disks) * raid->stripe_size + 
                        (logical_block % raid->stripe_size);
    
    return write_disk(&raid->disks[disk_number], physical_block, buffer);
}
```

### RAID 1 (Mirroring)
```c
struct raid1_config {
    int num_mirrors;
    struct disk_info primary_disk;
    struct disk_info mirror_disks[MAX_MIRRORS];
};

int raid1_read(struct raid1_config *raid, int logical_block, void *buffer) {
    // Try primary disk first
    int result = read_disk(&raid->primary_disk, logical_block, buffer);
    
    if (result < 0) {
        // Primary failed, try mirrors
        for (int i = 0; i < raid->num_mirrors; i++) {
            result = read_disk(&raid->mirror_disks[i], logical_block, buffer);
            if (result >= 0) {
                break;
            }
        }
    }
    
    return result;
}

int raid1_write(struct raid1_config *raid, int logical_block, const void *buffer) {
    int success_count = 0;
    
    // Write to primary
    if (write_disk(&raid->primary_disk, logical_block, buffer) >= 0) {
        success_count++;
    }
    
    // Write to all mirrors
    for (int i = 0; i < raid->num_mirrors; i++) {
        if (write_disk(&raid->mirror_disks[i], logical_block, buffer) >= 0) {
            success_count++;
        }
    }
    
    return (success_count > 0) ? 0 : -1;
}
```

### RAID 5 (Striping with Parity)
```c
struct raid5_config {
    int num_disks;
    int stripe_size;
    struct disk_info disks[MAX_DISKS];
};

int raid5_read(struct raid5_config *raid, int logical_block, void *buffer) {
    int stripe_number = logical_block / raid->stripe_size;
    int data_disks = raid->num_disks - 1;
    int disk_number = (logical_block / raid->stripe_size) % data_disks;
    int parity_disk = stripe_number % raid->num_disks;
    
    // Adjust disk number if it's >= parity disk
    if (disk_number >= parity_disk) {
        disk_number++;
    }
    
    int physical_block = (stripe_number / data_disks) * raid->stripe_size + 
                        (logical_block % raid->stripe_size);
    
    int result = read_disk(&raid->disks[disk_number], physical_block, buffer);
    
    if (result < 0) {
        // Disk failed, reconstruct from parity
        return reconstruct_from_parity(raid, stripe_number, disk_number, buffer);
    }
    
    return result;
}

int raid5_write(struct raid5_config *raid, int logical_block, const void *buffer) {
    int stripe_number = logical_block / raid->stripe_size;
    int data_disks = raid->num_disks - 1;
    int disk_number = (logical_block / raid->stripe_size) % data_disks;
    int parity_disk = stripe_number % raid->num_disks;
    
    if (disk_number >= parity_disk) {
        disk_number++;
    }
    
    int physical_block = (stripe_number / data_disks) * raid->stripe_size + 
                        (logical_block % raid->stripe_size);
    
    // Read old data and parity
    char old_data[BLOCK_SIZE];
    char old_parity[BLOCK_SIZE];
    
    read_disk(&raid->disks[disk_number], physical_block, old_data);
    read_disk(&raid->disks[parity_disk], physical_block, old_parity);
    
    // Calculate new parity
    char new_parity[BLOCK_SIZE];
    for (int i = 0; i < BLOCK_SIZE; i++) {
        new_parity[i] = old_parity[i] ^ old_data[i] ^ ((char*)buffer)[i];
    }
    
    // Write new data and parity
    write_disk(&raid->disks[disk_number], physical_block, buffer);
    write_disk(&raid->disks[parity_disk], physical_block, new_parity);
    
    return 0;
}
```

## Swap Space Management

### Swap Space Allocation
```c
struct swap_space {
    int total_pages;
    int free_pages;
    unsigned char *bitmap;
    struct swap_entry *swap_table;
};

struct swap_entry {
    int page_number;
    int process_id;
    bool in_use;
};

int allocate_swap_page(struct swap_space *swap, int process_id) {
    for (int i = 0; i < swap->total_pages; i++) {
        int byte_index = i / 8;
        int bit_index = i % 8;
        
        if (!(swap->bitmap[byte_index] & (1 << bit_index))) {
            // Page is free
            swap->bitmap[byte_index] |= (1 << bit_index);
            swap->free_pages--;
            
            swap->swap_table[i].page_number = i;
            swap->swap_table[i].process_id = process_id;
            swap->swap_table[i].in_use = true;
            
            return i;
        }
    }
    
    return -1;  // No free swap space
}

void free_swap_page(struct swap_space *swap, int page_number) {
    int byte_index = page_number / 8;
    int bit_index = page_number % 8;
    
    swap->bitmap[byte_index] &= ~(1 << bit_index);
    swap->free_pages++;
    
    swap->swap_table[page_number].in_use = false;
}
```

### Swap-in and Swap-out
```c
int swap_out_page(int virtual_page, int process_id) {
    // Find physical frame
    int physical_frame = get_physical_frame(virtual_page, process_id);
    if (physical_frame == -1) {
        return -1;
    }
    
    // Allocate swap space
    int swap_page = allocate_swap_page(&swap_space, process_id);
    if (swap_page == -1) {
        return -1;  // No swap space
    }
    
    // Write page to swap
    void *page_data = get_frame_data(physical_frame);
    write_swap_page(swap_page, page_data);
    
    // Update page table
    struct page_table_entry *pte = get_page_table_entry(virtual_page, process_id);
    pte->present = 0;
    pte->swap_page = swap_page;
    
    // Free physical frame
    free_physical_frame(physical_frame);
    
    return 0;
}

int swap_in_page(int virtual_page, int process_id) {
    struct page_table_entry *pte = get_page_table_entry(virtual_page, process_id);
    
    if (pte->present) {
        return 0;  // Already in memory
    }
    
    // Allocate physical frame
    int physical_frame = allocate_physical_frame();
    if (physical_frame == -1) {
        // Need to swap out another page
        physical_frame = select_victim_page();
        swap_out_page(get_virtual_page(physical_frame), get_frame_process(physical_frame));
    }
    
    // Read page from swap
    void *page_data = get_frame_data(physical_frame);
    read_swap_page(pte->swap_page, page_data);
    
    // Update page table
    pte->present = 1;
    pte->frame = physical_frame;
    
    // Free swap space
    free_swap_page(&swap_space, pte->swap_page);
    
    return 0;
}
```

## Storage Area Networks (SAN)

### Fibre Channel
```c
struct fc_port {
    unsigned long long wwpn;  // World Wide Port Name
    unsigned long long wwnn;  // World Wide Node Name
    int port_id;
    int speed;  // 1, 2, 4, 8, 16 Gbps
    enum fc_port_state state;
};

struct fc_fabric {
    struct fc_switch switches[MAX_SWITCHES];
    struct fc_port ports[MAX_PORTS];
    struct fc_zone zones[MAX_ZONES];
};

int fc_login(struct fc_port *port, struct fc_fabric *fabric) {
    // Fabric Login (FLOGI)
    struct flogi_request flogi;
    flogi.wwpn = port->wwpn;
    flogi.wwnn = port->wwnn;
    
    int result = send_fc_frame(fabric, &flogi, sizeof(flogi));
    if (result < 0) {
        return -1;
    }
    
    // Receive port ID assignment
    struct flogi_response response;
    receive_fc_frame(fabric, &response, sizeof(response));
    
    port->port_id = response.assigned_port_id;
    port->state = FC_PORT_ONLINE;
    
    return 0;
}
```

### iSCSI
```c
struct iscsi_session {
    char target_name[256];
    char initiator_name[256];
    int session_id;
    int connection_id;
    int socket_fd;
    enum iscsi_session_state state;
};

int iscsi_login(struct iscsi_session *session, const char *target_ip, int port) {
    // Create TCP connection
    session->socket_fd = socket(AF_INET, SOCK_STREAM, 0);
    
    struct sockaddr_in target_addr;
    target_addr.sin_family = AF_INET;
    target_addr.sin_port = htons(port);
    inet_pton(AF_INET, target_ip, &target_addr.sin_addr);
    
    if (connect(session->socket_fd, (struct sockaddr*)&target_addr, 
                sizeof(target_addr)) < 0) {
        return -1;
    }
    
    // Send login request
    struct iscsi_login_request login_req;
    login_req.opcode = ISCSI_OP_LOGIN_REQ;
    strcpy(login_req.initiator_name, session->initiator_name);
    strcpy(login_req.target_name, session->target_name);
    
    send(session->socket_fd, &login_req, sizeof(login_req), 0);
    
    // Receive login response
    struct iscsi_login_response login_resp;
    recv(session->socket_fd, &login_resp, sizeof(login_resp), 0);
    
    if (login_resp.status == ISCSI_STATUS_SUCCESS) {
        session->session_id = login_resp.session_id;
        session->state = ISCSI_SESSION_LOGGED_IN;
        return 0;
    }
    
    return -1;
}
```

## Lab Exercises

### Exercise 1: Disk Scheduling Simulator
```c
struct disk_scheduler {
    enum scheduling_algorithm algorithm;
    struct disk_request *request_queue;
    int current_cylinder;
    int total_cylinders;
    bool direction_up;
};

int simulate_disk_scheduling(struct disk_scheduler *scheduler, 
                           struct disk_request requests[], int num_requests);
void compare_scheduling_algorithms(struct disk_request requests[], int num_requests);
```

### Exercise 2: RAID Implementation
```c
struct raid_controller {
    enum raid_level level;
    int num_disks;
    struct disk_info disks[MAX_DISKS];
    bool (*read_function)(struct raid_controller *raid, int block, void *buffer);
    bool (*write_function)(struct raid_controller *raid, int block, const void *buffer);
};

int implement_raid_system(struct raid_controller *raid, enum raid_level level);
```

## Quiz Questions
1. Compare the performance characteristics of FCFS, SSTF, SCAN, and C-SCAN disk scheduling algorithms
2. What are the advantages and disadvantages of different RAID levels?
3. How does SSD technology differ from traditional magnetic disks in terms of performance and management?
4. Explain the trade-offs between different swap space management strategies
5. What are the benefits of Storage Area Networks (SAN) over Direct Attached Storage (DAS)?

## Next Module
Module 12: I/O Systems