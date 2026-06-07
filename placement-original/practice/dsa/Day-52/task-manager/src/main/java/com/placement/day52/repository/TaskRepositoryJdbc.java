package com.placement.day52.repository;

import com.placement.day52.model.Task;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class TaskRepositoryJdbc implements TaskRepository {
    private final DataSource ds;

    public TaskRepositoryJdbc(DataSource ds) {
        this.ds = ds;
    }

    public void initSchema() throws SQLException {
        try (Connection c = ds.getConnection(); Statement s = c.createStatement()) {
            s.execute("CREATE TABLE IF NOT EXISTS tasks (id BIGINT PRIMARY KEY, title VARCHAR(200), description TEXT, project_id BIGINT, assigned_to BIGINT, priority VARCHAR(20), status VARCHAR(20), due_date TIMESTAMP)");
        }
    }

    @Override
    public Task save(Task task) {
        try (Connection c = ds.getConnection()) {
            String upsert = "INSERT INTO tasks(id, title, description, project_id, assigned_to, priority, status, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, project_id = EXCLUDED.project_id, assigned_to = EXCLUDED.assigned_to, priority = EXCLUDED.priority, status = EXCLUDED.status, due_date = EXCLUDED.due_date";
            try (PreparedStatement ps = c.prepareStatement(upsert)) {
                ps.setLong(1, task.getId());
                ps.setString(2, task.getTitle());
                ps.setString(3, task.getDescription());
                ps.setLong(4, task.getProjectId());
                if (task.getAssignedTo() != null) ps.setLong(5, task.getAssignedTo()); else ps.setNull(5, Types.BIGINT);
                ps.setString(6, task.getPriority());
                ps.setString(7, task.getStatus());
                if (task.getDueDate() != null) ps.setTimestamp(8, Timestamp.valueOf(task.getDueDate())); else ps.setNull(8, Types.TIMESTAMP);
                ps.executeUpdate();
            }
            return task;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Task> findById(long id) {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("SELECT id, title, description, project_id, assigned_to, priority, status, due_date FROM tasks WHERE id = ?")) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Task t = new Task(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getLong(4));
                    long assigned = rs.getLong(5);
                    if (!rs.wasNull()) t.setAssignedTo(assigned);
                    t.setPriority(rs.getString(6));
                    t.setStatus(rs.getString(7));
                    Timestamp ts = rs.getTimestamp(8);
                    if (ts != null) t.setDueDate(ts.toLocalDateTime());
                    return Optional.of(t);
                }
            }
            return Optional.empty();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Task> findByProjectId(long projectId) {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("SELECT id, title, description, project_id, assigned_to, priority, status, due_date FROM tasks WHERE project_id = ?")) {
            ps.setLong(1, projectId);
            try (ResultSet rs = ps.executeQuery()) {
                List<Task> list = new ArrayList<>();
                while (rs.next()) {
                    Task t = new Task(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getLong(4));
                    long assigned = rs.getLong(5);
                    if (!rs.wasNull()) t.setAssignedTo(assigned);
                    t.setPriority(rs.getString(6));
                    t.setStatus(rs.getString(7));
                    Timestamp ts = rs.getTimestamp(8);
                    if (ts != null) t.setDueDate(ts.toLocalDateTime());
                    list.add(t);
                }
                return list;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Task> search(Predicate<Task> predicate) {
        // naive implementation: fetch all and filter
        return findAll().stream().filter(predicate).collect(Collectors.toList());
    }

    @Override
    public List<Task> findAll() {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("SELECT id, title, description, project_id, assigned_to, priority, status, due_date FROM tasks")) {
            try (ResultSet rs = ps.executeQuery()) {
                List<Task> list = new ArrayList<>();
                while (rs.next()) {
                    Task t = new Task(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getLong(4));
                    long assigned = rs.getLong(5);
                    if (!rs.wasNull()) t.setAssignedTo(assigned);
                    t.setPriority(rs.getString(6));
                    t.setStatus(rs.getString(7));
                    Timestamp ts = rs.getTimestamp(8);
                    if (ts != null) t.setDueDate(ts.toLocalDateTime());
                    list.add(t);
                }
                return list;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteById(long id) {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("DELETE FROM tasks WHERE id = ?")) {
            ps.setLong(1, id);
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
