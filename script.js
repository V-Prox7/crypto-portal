// Wallet filtering functionality
function filterWallets(category) {
  const walletCards = document.querySelectorAll('.wallet-card');
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  // Remove active class from all tabs
  tabButtons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked tab
  event.target.classList.add('active');
  
  // Show/hide wallet cards based on category
  walletCards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      const cardCategory = card.getAttribute('data-category');
      if (cardCategory === category) {
        card.style.display = 'block';
      } else if (cardCategory) {
        card.style.display = 'none';
      } else {
        card.style.display = category === 'all' ? 'block' : 'none';
      }
    }
  });
}

// Connect button functionality
document.querySelectorAll('.connect-btn').forEach(button => {
  button.addEventListener('click', function() {
    const walletName = this.parentElement.querySelector('h3').textContent;
    showConnectionModal(walletName);
  });
});

// Show connection modal
function showConnectionModal(walletName) {
  const message = `Attempting to connect ${walletName}...\n\nThis is a demo. In production, integrate with the wallet provider.`;
  alert(message);
  console.log(`Connecting to ${walletName}`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Crypto Portal loaded successfully');
});

// Add hover effects to wallet cards
document.querySelectorAll('.wallet-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});
