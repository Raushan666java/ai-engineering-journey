# Module 12: I/O Systems

## I/O Hardware

### I/O Devices Classification
```c
enum device_type {
    BLOCK_DEVICE,      // Fixed-size blocks (disks)
    CHARACTER_DEVICE,  // Stream of characters (keyboard, mouse)
    NETWORK_DEVICE     // Network interfaces
};

struct io_device {
    char name[32];
    enum device_type type;
    int major_number;
    int minor_number;
    struct device_operations *ops;
    void *private_data;
    struct list_head device_list;
};

struct device_operations {
    int (*open)(struct io_device *dev);
    int (*close)(struct io_device *dev);
    ssize_t (*read)(struct io_device *dev, void *buf, size_t count, loff_t *pos);
    ssize_t (*write)(struct io_device *dev, const void *buf, size_t count, loff_t *pos);
    long (*ioctl)(struct io_device *dev, unsigned int cmd, unsigned long arg);
};
```

### Device Controllers
```c
struct device_controller {
    int controller_id;
    int base_address;
    int interrupt_line;
    struct io_device *devices[MAX_DEVICES_PER_CONTROLLER];
    int device_count;
    
    // Controller-specific registers
    volatile uint32_t *command_register;
    volatile uint32_t *status_register;
    volatile uint32_t *data_register;
    volatile uint32_t *control_register;
};

// Example: Simple disk controller
struct disk_controller {
    struct device_controller base;
    int current_cylinder;
    int current_head;
    int current_sector;
    bool busy;
    struct disk_request *current_request;
};
```

## I/O Methods

### Programmed I/O (Polling)
```c
int programmed_io_read(struct device_controller *ctrl, void *buffer, size_t size) {
    size_t bytes_read = 0;
    char *buf = (char*)buffer;
    
    while (bytes_read < size) {
        // Poll status register
        while (!(ctrl->status_register & STATUS_DATA_READY)) {
            // Busy wait - CPU is occupied
            cpu_relax();
        }
        
        // Read data
        buf[bytes_read] = ctrl->data_register & 0xFF;
        bytes_read++;
        
        // Clear status
        ctrl->status_register &= ~STATUS_DATA_READY;
    }
    
    return bytes_read;
}

int programmed_io_write(struct device_controller *ctrl, const void *buffer, size_t size) {
    size_t bytes_written = 0;
    const char *buf = (const char*)buffer;
    
    while (bytes_written < size) {
        // Poll status register
        while (!(ctrl->status_register & STATUS_READY_FOR_DATA)) {
            cpu_relax();
        }
        
        // Write data
        ctrl->data_register = buf[bytes_written];
        bytes_written++;
        
        // Clear status
        ctrl->status_register &= ~STATUS_READY_FOR_DATA;
    }
    
    return bytes_written;
}
```

### Interrupt-Driven I/O
```c
struct interrupt_io_context {
    void *buffer;
    size_t size;
    size_t bytes_transferred;
    bool transfer_complete;
    struct completion completion;
};

void start_interrupt_io_read(struct device_controller *ctrl, void *buffer, size_t size) {
    struct interrupt_io_context *ctx = kmalloc(sizeof(*ctx), GFP_KERNEL);
    ctx->buffer = buffer;
    ctx->size = size;
    ctx->bytes_transferred = 0;
    ctx->transfer_complete = false;
    init_completion(&ctx->completion);
    
    // Store context in device private data
    ctrl->private_data = ctx;
    
    // Enable interrupts and start transfer
    ctrl->control_register |= CTRL_INTERRUPT_ENABLE;
    ctrl->command_register = CMD_START_READ;
}

void io_interrupt_handler(int irq, void *dev_id) {
    struct device_controller *ctrl = (struct device_controller*)dev_id;
    struct interrupt_io_context *ctx = ctrl->private_data;
    
    if (ctrl->status_register & STATUS_DATA_READY) {
        // Read data
        char *buf = (char*)ctx->buffer;
        buf[ctx->bytes_transferred] = ctrl->data_register & 0xFF;
        ctx->bytes_transferred++;
        
        if (ctx->bytes_transferred >= ctx->size) {
            // Transfer complete
            ctx->transfer_complete = true;
            complete(&ctx->completion);
            
            // Disable interrupts
            ctrl->control_register &= ~CTRL_INTERRUPT_ENABLE;
        } else {
            // Continue transfer
            ctrl->command_register = CMD_CONTINUE_READ;
        }
    }
    
    // Acknowledge interrupt
    ctrl->status_register |= STATUS_INTERRUPT_ACK;
}
```

### Direct Memory Access (DMA)
```c
struct dma_controller {
    int channel;
    volatile uint32_t *source_address;
    volatile uint32_t *dest_address;
    volatile uint32_t *transfer_count;
    volatile uint32_t *control_register;
    volatile uint32_t *status_register;
};

struct dma_transfer {
    dma_addr_t src_addr;
    dma_addr_t dst_addr;
    size_t length;
    int direction;  // DMA_TO_DEVICE, DMA_FROM_DEVICE
    void (*callback)(void *data);
    void *callback_data;
};

int setup_dma_transfer(struct dma_controller *dma, struct dma_transfer *transfer) {
    // Check if DMA controller is busy
    if (dma->status_register & DMA_STATUS_BUSY) {
        return -EBUSY;
    }
    
    // Setup DMA registers
    *dma->source_address = transfer->src_addr;
    *dma->dest_address = transfer->dst_addr;
    *dma->transfer_count = transfer->length;
    
    // Configure control register
    uint32_t control = 0;
    if (transfer->direction == DMA_TO_DEVICE) {
        control |= DMA_CTRL_WRITE;
    } else {
        control |= DMA_CTRL_READ;
    }
    control |= DMA_CTRL_INTERRUPT_ENABLE;
    
    *dma->control_register = control;
    
    // Start transfer
    *dma->control_register |= DMA_CTRL_START;
    
    return 0;
}

void dma_interrupt_handler(int irq, void *dev_id) {
    struct dma_controller *dma = (struct dma_controller*)dev_id;
    
    if (dma->status_register & DMA_STATUS_COMPLETE) {
        // Transfer completed
        struct dma_transfer *transfer = get_current_transfer(dma);
        
        if (transfer && transfer->callback) {
            transfer->callback(transfer->callback_data);
        }
        
        // Clear interrupt
        *dma->status_register |= DMA_STATUS_INTERRUPT_ACK;
        
        // Start next transfer if queued
        start_next_dma_transfer(dma);
    }
}
```

## Application I/O Interface

### Block Device Interface
```c
struct block_device {
    struct io_device base;
    int block_size;
    sector_t capacity;
    struct request_queue *queue;
    struct gendisk *disk;
};

struct bio {
    sector_t bi_sector;
    struct bio_vec *bi_io_vec;
    unsigned short bi_vcnt;
    unsigned short bi_idx;
    unsigned int bi_size;
    unsigned int bi_rw;
};

int block_device_read(struct block_device *bdev, sector_t sector, 
                     void *buffer, size_t count) {
    struct bio *bio = bio_alloc(GFP_KERNEL, 1);
    bio->bi_sector = sector;
    bio->bi_size = count;
    bio->bi_rw = READ;
    
    // Add buffer to bio
    bio_add_page(bio, virt_to_page(buffer), count, offset_in_page(buffer));
    
    // Submit to block layer
    submit_bio(READ, bio);
    
    // Wait for completion
    wait_for_completion(&bio->bi_completion);
    
    int result = bio->bi_error;
    bio_put(bio);
    
    return result;
}
```

### Character Device Interface
```c
struct char_device {
    struct io_device base;
    struct cdev cdev;
    struct file_operations fops;
    wait_queue_head_t read_wait;
    wait_queue_head_t write_wait;
    struct mutex mutex;
    char *buffer;
    size_t buffer_size;
    size_t read_pos;
    size_t write_pos;
};

ssize_t char_device_read(struct file *file, char __user *buf, 
                        size_t count, loff_t *pos) {
    struct char_device *cdev = file->private_data;
    ssize_t bytes_read = 0;
    
    mutex_lock(&cdev->mutex);
    
    while (bytes_read < count) {
        // Check if data available
        if (cdev->read_pos == cdev->write_pos) {
            mutex_unlock(&cdev->mutex);
            
            if (file->f_flags & O_NONBLOCK) {
                return -EAGAIN;
            }
            
            // Wait for data
            if (wait_event_interruptible(cdev->read_wait, 
                                        cdev->read_pos != cdev->write_pos)) {
                return -ERESTARTSYS;
            }
            
            mutex_lock(&cdev->mutex);
        }
        
        // Copy data to user space
        size_t available = (cdev->write_pos - cdev->read_pos) % cdev->buffer_size;
        size_t to_copy = min(count - bytes_read, available);
        
        if (copy_to_user(buf + bytes_read, 
                        cdev->buffer + cdev->read_pos, to_copy)) {
            mutex_unlock(&cdev->mutex);
            return -EFAULT;
        }
        
        cdev->read_pos = (cdev->read_pos + to_copy) % cdev->buffer_size;
        bytes_read += to_copy;
        
        // Wake up writers
        wake_up_interruptible(&cdev->write_wait);
    }
    
    mutex_unlock(&cdev->mutex);
    return bytes_read;
}
```

### Network Device Interface
```c
struct net_device {
    struct io_device base;
    unsigned char dev_addr[6];  // MAC address
    unsigned int mtu;
    struct net_device_stats stats;
    struct netdev_queue *tx_queue;
    
    int (*open)(struct net_device *dev);
    int (*stop)(struct net_device *dev);
    int (*hard_start_xmit)(struct sk_buff *skb, struct net_device *dev);
    void (*set_multicast_list)(struct net_device *dev);
    int (*set_mac_address)(struct net_device *dev, void *addr);
};

int network_device_transmit(struct net_device *dev, struct sk_buff *skb) {
    // Check if device is up
    if (!(dev->flags & IFF_UP)) {
        dev_kfree_skb(skb);
        return -ENETDOWN;
    }
    
    // Check MTU
    if (skb->len > dev->mtu) {
        dev_kfree_skb(skb);
        dev->stats.tx_errors++;
        return -EMSGSIZE;
    }
    
    // Queue packet for transmission
    int result = dev->hard_start_xmit(skb, dev);
    
    if (result == NETDEV_TX_OK) {
        dev->stats.tx_packets++;
        dev->stats.tx_bytes += skb->len;
    } else {
        dev->stats.tx_errors++;
    }
    
    return result;
}
```

## Kernel I/O Subsystem

### I/O Scheduling
```c
struct io_scheduler {
    const char *name;
    struct list_head queue;
    
    void (*add_request)(struct io_scheduler *sched, struct request *req);
    struct request* (*next_request)(struct io_scheduler *sched);
    void (*remove_request)(struct io_scheduler *sched, struct request *req);
};

// FIFO I/O Scheduler
void fifo_add_request(struct io_scheduler *sched, struct request *req) {
    list_add_tail(&req->queuelist, &sched->queue);
}

struct request* fifo_next_request(struct io_scheduler *sched) {
    if (list_empty(&sched->queue)) {
        return NULL;
    }
    
    return list_first_entry(&sched->queue, struct request, queuelist);
}

// Elevator I/O Scheduler (SCAN)
void elevator_add_request(struct io_scheduler *sched, struct request *req) {
    struct request *pos;
    
    // Insert in sorted order by sector number
    list_for_each_entry(pos, &sched->queue, queuelist) {
        if (req->sector < pos->sector) {
            list_add_tail(&req->queuelist, &pos->queuelist);
            return;
        }
    }
    
    // Add at end if largest sector
    list_add_tail(&req->queuelist, &sched->queue);
}
```

### Buffering
```c
struct buffer_cache {
    struct hash_table *hash_table;
    struct lru_list *lru_list;
    int cache_size;
    int max_cache_size;
    struct mutex cache_mutex;
};

struct buffer_head {
    sector_t b_blocknr;
    size_t b_size;
    char *b_data;
    struct block_device *b_bdev;
    unsigned long b_state;
    atomic_t b_count;
    struct list_head b_lru;
    struct hlist_node b_hash;
};

struct buffer_head* find_buffer(struct buffer_cache *cache, 
                               struct block_device *bdev, sector_t block) {
    mutex_lock(&cache->cache_mutex);
    
    // Search hash table
    unsigned int hash = hash_block(bdev, block);
    struct buffer_head *bh;
    
    hlist_for_each_entry(bh, &cache->hash_table->buckets[hash], b_hash) {
        if (bh->b_bdev == bdev && bh->b_blocknr == block) {
            // Found in cache
            atomic_inc(&bh->b_count);
            list_move(&bh->b_lru, &cache->lru_list->head);
            mutex_unlock(&cache->cache_mutex);
            return bh;
        }
    }
    
    mutex_unlock(&cache->cache_mutex);
    return NULL;  // Not in cache
}
```

### Caching
```c
struct page_cache {
    struct radix_tree_root page_tree;
    spinlock_t tree_lock;
    unsigned long nrpages;
    struct address_space_operations *a_ops;
};

struct page* find_get_page(struct page_cache *cache, pgoff_t offset) {
    struct page *page;
    
    spin_lock_irq(&cache->tree_lock);
    page = radix_tree_lookup(&cache->page_tree, offset);
    if (page) {
        page_cache_get(page);
    }
    spin_unlock_irq(&cache->tree_lock);
    
    return page;
}

int add_to_page_cache(struct page_cache *cache, struct page *page, pgoff_t offset) {
    int error;
    
    spin_lock_irq(&cache->tree_lock);
    error = radix_tree_insert(&cache->page_tree, offset, page);
    if (!error) {
        cache->nrpages++;
        page_cache_get(page);
    }
    spin_unlock_irq(&cache->tree_lock);
    
    return error;
}
```

### Spooling and Device Reservation
```c
struct spool_system {
    struct list_head job_queue;
    struct mutex queue_mutex;
    struct task_struct *spooler_thread;
    wait_queue_head_t job_wait;
    bool running;
};

struct spool_job {
    int job_id;
    int user_id;
    char *data;
    size_t data_size;
    int priority;
    time_t submit_time;
    struct list_head list;
};

int submit_spool_job(struct spool_system *spool, struct spool_job *job) {
    mutex_lock(&spool->queue_mutex);
    
    // Insert job in priority order
    struct spool_job *pos;
    list_for_each_entry(pos, &spool->job_queue, list) {
        if (job->priority > pos->priority) {
            list_add_tail(&job->list, &pos->list);
            goto inserted;
        }
    }
    
    // Add at end if lowest priority
    list_add_tail(&job->list, &spool->job_queue);
    
inserted:
    mutex_unlock(&spool->queue_mutex);
    
    // Wake up spooler thread
    wake_up_interruptible(&spool->job_wait);
    
    return 0;
}

int spooler_thread(void *data) {
    struct spool_system *spool = (struct spool_system*)data;
    
    while (spool->running) {
        struct spool_job *job = NULL;
        
        // Wait for jobs
        wait_event_interruptible(spool->job_wait, 
                                !list_empty(&spool->job_queue) || !spool->running);
        
        if (!spool->running) {
            break;
        }
        
        // Get next job
        mutex_lock(&spool->queue_mutex);
        if (!list_empty(&spool->job_queue)) {
            job = list_first_entry(&spool->job_queue, struct spool_job, list);
            list_del(&job->list);
        }
        mutex_unlock(&spool->queue_mutex);
        
        if (job) {
            // Process job
            process_spool_job(job);
            free_spool_job(job);
        }
    }
    
    return 0;
}
```

## Error Handling

### I/O Error Detection and Correction
```c
enum io_error_type {
    IO_ERROR_NONE,
    IO_ERROR_TIMEOUT,
    IO_ERROR_CRC,
    IO_ERROR_DEVICE_NOT_READY,
    IO_ERROR_MEDIA_ERROR,
    IO_ERROR_HARDWARE_FAILURE
};

struct io_error_handler {
    int max_retries;
    int retry_delay_ms;
    bool (*should_retry)(enum io_error_type error);
    void (*handle_permanent_error)(struct io_device *dev, enum io_error_type error);
};

int handle_io_error(struct io_device *dev, enum io_error_type error, 
                   struct io_request *request) {
    struct io_error_handler *handler = dev->error_handler;
    
    if (handler->should_retry(error) && request->retry_count < handler->max_retries) {
        // Retry the operation
        request->retry_count++;
        
        // Delay before retry
        msleep(handler->retry_delay_ms);
        
        return retry_io_request(dev, request);
    } else {
        // Permanent error
        handler->handle_permanent_error(dev, error);
        return -EIO;
    }
}

bool should_retry_error(enum io_error_type error) {
    switch (error) {
        case IO_ERROR_TIMEOUT:
        case IO_ERROR_DEVICE_NOT_READY:
            return true;
        case IO_ERROR_CRC:
        case IO_ERROR_MEDIA_ERROR:
        case IO_ERROR_HARDWARE_FAILURE:
            return false;
        default:
            return false;
    }
}
```

## Performance Optimization

### I/O Performance Monitoring
```c
struct io_stats {
    unsigned long read_ios;
    unsigned long write_ios;
    unsigned long read_sectors;
    unsigned long write_sectors;
    unsigned long read_ticks;
    unsigned long write_ticks;
    unsigned long io_ticks;
    unsigned long time_in_queue;
};

void update_io_stats(struct io_stats *stats, struct io_request *req) {
    unsigned long duration = jiffies - req->start_time;
    
    if (req->rw & WRITE) {
        stats->write_ios++;
        stats->write_sectors += req->nr_sectors;
        stats->write_ticks += duration;
    } else {
        stats->read_ios++;
        stats->read_sectors += req->nr_sectors;
        stats->read_ticks += duration;
    }
    
    stats->io_ticks += duration;
    stats->time_in_queue += req->queue_time;
}

void print_io_stats(struct io_stats *stats) {
    printf("I/O Statistics:\n");
    printf("  Reads: %lu IOs, %lu sectors\n", stats->read_ios, stats->read_sectors);
    printf("  Writes: %lu IOs, %lu sectors\n", stats->write_ios, stats->write_sectors);
    printf("  Average read time: %lu ms\n", 
           stats->read_ios ? stats->read_ticks / stats->read_ios : 0);
    printf("  Average write time: %lu ms\n", 
           stats->write_ios ? stats->write_ticks / stats->write_ios : 0);
}
```

## Lab Exercises

### Exercise 1: Device Driver Framework
```c
struct simple_device_driver {
    struct io_device device;
    char *buffer;
    size_t buffer_size;
    size_t data_size;
    struct mutex mutex;
    wait_queue_head_t read_wait;
    wait_queue_head_t write_wait;
};

int simple_driver_init(struct simple_device_driver *driver);
ssize_t simple_driver_read(struct file *file, char __user *buf, size_t count, loff_t *pos);
ssize_t simple_driver_write(struct file *file, const char __user *buf, size_t count, loff_t *pos);
```

### Exercise 2: I/O Scheduler Implementation
```c
struct custom_io_scheduler {
    struct io_scheduler base;
    struct list_head read_queue;
    struct list_head write_queue;
    int read_batch_size;
    int write_batch_size;
    int current_batch_count;
    bool serving_reads;
};

void custom_scheduler_init(struct custom_io_scheduler *sched);
void custom_add_request(struct io_scheduler *sched, struct request *req);
struct request* custom_next_request(struct io_scheduler *sched);
```

## Quiz Questions
1. Compare the advantages and disadvantages of programmed I/O, interrupt-driven I/O, and DMA
2. How does I/O scheduling improve system performance?
3. What are the benefits of buffering and caching in I/O systems?
4. Explain the difference between block devices and character devices
5. How do device drivers provide hardware abstraction?

## Next Module
Module 13: Protection and Security