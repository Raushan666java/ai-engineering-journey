<nav class="navbar navbar-vertical navbar-expand-lg">
  <script>
    var navbarStyle = window.config.config.phoenixNavbarStyle;
    if (navbarStyle && navbarStyle !== 'transparent') {
      document.querySelector('body').classList.add(`navbar-${navbarStyle}`);
    }
  </script>
  
  <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
    <div class="navbar-vertical-content">
      <ul class="navbar-nav flex-column" id="navbarVerticalNav">
        
        <!-- Dashboard -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-dashboard" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-dashboard">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="pie-chart"></span>
                </span>
                <span class="nav-link-text">Dashboard</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-dashboard">
                <li class="collapsed-nav-item-title d-none">Dashboard</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dashboard') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Main Dashboard</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dashboard.learning') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Learning</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dashboard.coding') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Coding</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dashboard.goals') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Goals</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dashboard.placement') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Placement</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Learning Platform -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-learning" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-learning">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="book-open"></span>
                </span>
                <span class="nav-link-text">Learning Platform</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-learning">
                <li class="collapsed-nav-item-title d-none">Learning Platform</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('learning.dashboard') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Learning Dashboard</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('learning.courses.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">All Courses</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('learning.my-learning') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">My Learning</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('learning.featured') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Featured Courses</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('subjects.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Subjects</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- DSA Platform -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-dsa" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-dsa">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="code"></span>
                </span>
                <span class="nav-link-text">DSA Platform</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-dsa">
                <li class="collapsed-nav-item-title d-none">DSA Platform</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dsa.dashboard') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">DSA Dashboard</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dsa.problems.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Problems</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('dsa.dsa.contests.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Contests</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('dsa.practice') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Practice</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Apps -->
        <li class="nav-item">
          <p class="navbar-vertical-label">Apps</p>
          <hr class="navbar-vertical-line">
        </li>

      

        <!-- Project Management -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-projects" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-projects">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="folder"></span>
                </span>
                <span class="nav-link-text">Projects</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-projects">
                <li class="collapsed-nav-item-title d-none">Projects</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('projects.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">All Projects</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Monitask -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-monitask" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-monitask">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="activity"></span>
                </span>
                <span class="nav-link-text">Monitask</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-monitask">
                <li class="collapsed-nav-item-title d-none">Monitask</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.dashboard') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Monitask Dashboard</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.time-tracking') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Time Tracking</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.projects.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Projects</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.tasks') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Tasks</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.timer') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Timer</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.reports') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Reports</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.team') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Team</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('monitask.agents') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Agents</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- AI & Tools -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-ai-tools" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-ai-tools">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="cpu"></span>
                </span>
                <span class="nav-link-text">AI & Tools</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-ai-tools">
                <li class="collapsed-nav-item-title d-none">AI & Tools</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('ai-teacher.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">AI Teacher</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('reports.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Reports</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Components -->
        <li class="nav-item">
          <p class="navbar-vertical-label">User</p>
          <hr class="navbar-vertical-line">
        </li>

        <!-- User Management -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-user-profile" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-user-profile">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="user"></span>
                </span>
                <span class="nav-link-text">Profile</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-user-profile">
                <li class="collapsed-nav-item-title d-none">Profile</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('profile.show') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">My Profile</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('progress.index') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Progress</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('achievements') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Achievements</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('settings') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Settings</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Community -->
        <li class="nav-item">
          <div class="nav-item-wrapper">
            <a class="nav-link dropdown-indicator label-1" href="#nv-community" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-community">
              <div class="d-flex align-items-center">
                <div class="dropdown-indicator-icon">
                  <span class="fas fa-caret-right"></span>
                </div>
                <span class="nav-link-icon">
                  <span data-feather="users"></span>
                </span>
                <span class="nav-link-text">Community</span>
              </div>
            </a>
            <div class="parent-wrapper label-1">
              <ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-community">
                <li class="collapsed-nav-item-title d-none">Community</li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('community') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Community Hub</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('leaderboard') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Leaderboard</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="{{ route('help') }}">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-text">Help Center</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="navbar-vertical-footer">
    <button class="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center">
      <span class="uil uil-left-arrow-to-left fs-8"></span>
      <span class="uil uil-arrow-from-right fs-8"></span>
      <span class="navbar-vertical-footer-text ms-2">Collapsed View</span>
    </button>
  </div>
</nav>
