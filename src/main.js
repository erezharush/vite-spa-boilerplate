import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <span class="logo-text">INSIGHTEC</span>
      </div>
      <ul class="nav-menu">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#specs">Tech Specs</a></li>
        <li><a href="#clinical">Clinical</a></li>
        <li><a href="#contact" class="nav-cta">Contact Us</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Exablate Prime</h1>
      <p class="hero-subtitle">Next Generation MR-Guided Focused Ultrasound</p>
      <p class="hero-description">
        Revolutionary incisionless neurosurgery platform delivering precise, 
        patient-specific treatment for movement disorders.
      </p>
      <div class="hero-cta">
        <button class="btn-primary">Learn More</button>
        <button class="btn-secondary">Watch Demo</button>
      </div>
    </div>
    <div class="hero-image">
      <div class="device-mockup">
        <div class="device-screen"></div>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Advanced Capabilities</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <h3>Sub-millimetric Precision</h3>
          <p>Advanced targeting with sub-millimetric control for precise lesion shaping</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧠</div>
          <h3>Intelligent Algorithms</h3>
          <p>One-click SDR calculations and automatic fusion with AC/PC identification</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Real-time Monitoring</h3>
          <p>Continuous temperature monitoring and cavitation detection for safety</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Streamlined Workflow</h3>
          <p>Intuitive UI with guided workflows and automated steps</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Specifications -->
  <section id="specs" class="specs">
    <div class="container">
      <div class="specs-content">
        <div class="specs-text">
          <h2>Technical Excellence</h2>
          <p class="specs-intro">
            Exablate Prime represents the pinnacle of MR-guided focused ultrasound technology,
            combining cutting-edge hardware with intelligent software.
          </p>
          <div class="specs-list">
            <div class="spec-item">
              <span class="spec-label">Imaging</span>
              <span class="spec-value">3T MRI Compatible</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Targeting</span>
              <span class="spec-value">Sub-millimetric precision</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Storage</span>
              <span class="spec-value">Up to 150 reports</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Connectivity</span>
              <span class="spec-value">PACS Integration</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Planning</span>
              <span class="spec-value">Remote physician access</span>
            </div>
          </div>
        </div>
        <div class="specs-image">
          <div class="spec-visual"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Clinical Applications -->
  <section id="clinical" class="clinical">
    <div class="container">
      <h2 class="section-title">Clinical Applications</h2>
      <div class="clinical-grid">
        <div class="clinical-card">
          <h3>Essential Tremor</h3>
          <p>FDA-approved treatment providing immediate and lasting tremor reduction</p>
        </div>
        <div class="clinical-card">
          <h3>Parkinson's Disease</h3>
          <p>Targeted treatment for tremor-dominant Parkinson's symptoms</p>
        </div>
        <div class="clinical-card">
          <h3>Neuropathic Pain</h3>
          <p>Precise ablation for chronic pain management</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery -->
  <section class="gallery">
    <div class="container">
      <h2 class="section-title">System Components</h2>
      <div class="gallery-grid">
        <div class="gallery-item active">
          <div class="gallery-image"></div>
          <p>Operator Console</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image"></div>
          <p>Transducer Array</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image"></div>
          <p>3T Head Coil</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image"></div>
          <p>Treatment Interface</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-content">
        <h2>Experience the Future of Neurosurgery</h2>
        <p>Learn how Exablate Prime can transform your practice</p>
        <div class="contact-buttons">
          <button class="btn-primary">Request Information</button>
          <button class="btn-secondary">Schedule Demo</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Specifications</a></li>
            <li><a href="#">Clinical Studies</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Training</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Remote Support</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Insightec</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Regulatory</a></li>
            <li><a href="#">Patents</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Insightec Ltd. All rights reserved.</p>
        <p class="footer-disclaimer">
          Exablate Prime is FDA approved for Essential Tremor and Tremor-dominant Parkinson's Disease.
        </p>
      </div>
    </div>
  </footer>
`

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// Gallery interaction
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.gallery-item').forEach(i => i.classList.remove('active'))
    this.classList.add('active')
  })
})