package com.placement.day52.repository;

import com.placement.day52.model.Project;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ProjectRepositoryJdbc implements ProjectRepository {
    private final DataSource ds;

    public ProjectRepositoryJdbc(DataSource ds) {
        this.ds = ds;
    }

    public void initSchema() throws SQLException {
        try (Connection c = ds.getConnection(); Statement s = c.createStatement()) {
            s.execute("CREATE TABLE IF NOT EXISTS projects (id BIGINT PRIMARY KEY, name VARCHAR(200), description TEXT, owner_id BIGINT)");
        }
    }

    @Override
    public Project save(Project project) {
        try (Connection c = ds.getConnection()) {
            String upsert = "INSERT INTO projects(id, name, description, owner_id) VALUES (?, ?, ?, ?) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description, owner_id = EXCLUDED.owner_id";
            try (PreparedStatement ps = c.prepareStatement(upsert)) {
                ps.setLong(1, project.getId());
                ps.setString(2, project.getName());
                ps.setString(3, project.getDescription());
                ps.setLong(4, project.getOwnerId());
                ps.executeUpdate();
            }
            return project;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Project> findById(long id) {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("SELECT id, name, description, owner_id FROM projects WHERE id = ?")) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Project p = new Project(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getLong(4));
                    return Optional.of(p);
                }
            }
            return Optional.empty();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Project> findByOwner(long ownerId) {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("SELECT id, name, description, owner_id FROM projects WHERE owner_id = ?")) {
            ps.setLong(1, ownerId);
            try (ResultSet rs = ps.executeQuery()) {
                List<Project> list = new ArrayList<>();
                while (rs.next()) {
                    list.add(new Project(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getLong(4)));
                }
                return list;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Project> findAll() {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("SELECT id, name, description, owner_id FROM projects")) {
            try (ResultSet rs = ps.executeQuery()) {
                List<Project> list = new ArrayList<>();
                while (rs.next()) {
                    list.add(new Project(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getLong(4)));
                }
                return list;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteById(long id) {
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement("DELETE FROM projects WHERE id = ?")) {
            ps.setLong(1, id);
            ps.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
