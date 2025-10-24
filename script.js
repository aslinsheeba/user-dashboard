// ===== Navbar Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Sidebar Toggle =====
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  mainContent.classList.toggle('expanded');
});

// ===== Fetch User Data =====
const userContainer = document.getElementById('user-container');

async function loadUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const limitedUsers = users.slice(0, 8); // First 8 users

    limitedUsers.forEach(user => {
      const status = Math.random() > 0.5 ? 'active' : 'inactive';
      const card = document.createElement('div');
      card.classList.add('user-card');
      card.innerHTML = `
        <img src="https://randomuser.me/api/portraits/lego/${user.id}.jpg" alt="User">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p class="status ${status}">${status === 'active' ? '🟢 Active' : '🔴 Inactive'}</p>
      `;
      userContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    userContainer.innerHTML = "<p>Failed to load users 😢</p>";
  }
}

loadUsers();
