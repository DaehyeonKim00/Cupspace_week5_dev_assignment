import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="navbar">
    <a class="logo" href="#home">HY.</a>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </nav>
  </header>

  <main>
    
    <section class="hero">

      <!-- Left: Introduction -->
      <div class="hero-content">

        <p class="eyebrow">Subspace Project</p>

        <h1>HADAM YANG</h1>

        <p class="intro">
          This is my first portfolio website
          built using Vite and TypeScript.
        </p>

    <div class="buttons">
      <a href="#projects" class="primary-btn">
        View Projects
      </a>

      <a href="#about" class="secondary-btn">
        About Me
      </a>
    </div>

  </div>

  <!-- Right: Profile Photo -->
    <div class="hero-image profile-circle">
      <img src="/images/memoji.png" alt="Hadam Memoji">
    </div>

    </section>

    <section id="about" class="content-section about-section">
      <p class="section-label">01 — Who am I</p>
      <h2>About Me</h2>

      <div class="about-grid">
        <div class="about-card about-card-wide">
          <span class="about-icon">👋</span>
          <span class="about-label">Name</span>
          <span class="about-value">Hadam Yang</span>
        </div>
        <div class="about-card">
          <span class="about-icon">🇰🇷</span>
          <span class="about-label">Nationality</span>
          <span class="about-value">Republic of Korea</span>
        </div>
        <div class="about-card">
          <span class="about-icon">🎓</span>
          <span class="about-label">University</span>
          <span class="about-value">Monash University</span>
        </div>
        <div class="about-card">
          <span class="about-icon">💻</span>
          <span class="about-label">Major</span>
          <span class="about-value">Computer Science</span>
        </div>
        <div class="about-card about-card-accent">
          <span class="about-icon">✨</span>
          <span class="about-label">MBTI</span>
          <span class="about-value">ENFJ</span>
        </div>
        <div class="about-card about-card-wide">
          <span class="about-icon">✉️</span>
          <span class="about-label">Email</span>
          <a class="about-value" href="mailto:hadalmyang@gmail.com">hadalmyang@gmail.com</a>
        </div>
      </div>
    </section>

    <section id="tmi" class="content-section">
      <p class="section-label">02 — Too Much Information</p>
      <h2>TMI</h2>

      <div class="now-playing">
        <img src="/images/favorite-song.png" alt="Lighthouse song cover">
        <div class="now-playing-info">
          <span class="now-playing-tag">♪ My Favorite Song</span>
          <strong class="now-playing-artist">Lighthouse</strong>
          <div class="now-playing-bar"><span></span></div>
          <a class="now-playing-btn" href="https://youtu.be/FOzJ77ImEu8?si=WVyPqyf9tR-op569" target="_blank" rel="noopener">
            ▶ Listen on YouTube
          </a>
        </div>
      </div>
    </section>

<section id="projects" class="content-section">
  <h2>My Projects</h2>

  <!-- Project 1: Image Left, Text Right -->
  <details class="project-accordion">
  <summary>Emotion Robot</summary>
  <div class="project-card project-row">

    <div class="project-image">
  <img src="/images/emotion-robot.png" alt="Emotion Robot">
</div>

    <div class="project-info">
      <p>
        It all started from my curiosity:
        "Can an AI, which receives a lot of information
        and provides answers, have emotions?"
        Based on this question, I created a machine
        learning program to detect emotions.
        I used Scratch and MLU
        (Machine Learning made by Amazon) to build it.
      </p>

      <p>
        The system was relatively simple, 
        but it gave me valuable insight into 
        how AI technology works and encouraged me 
        to explore more advanced machine learning 
        techniques in the future.
      </p>
    </div>

  </div>
  </details>

  <!-- Project 2: Text Left, Image Right -->
  <details class="project-accordion">
  <summary>Teachable Machine</summary>
  <div class="project-card project-row reverse">

    <div class="project-image">
  <img src="/images/teachable-machine.png" alt="Teachable Machine">
</div>

    <div class="project-info">
      <p>
        I created an AI to help with recycling using
        Teachable Machine and tested it in practice.
        I thought that in today's world, where
        environmental pollution is getting worse,
        recycling is a good way to help solve
        this problem.
      </p>

      <p>
        Although the final result was not highly successful, 
        it was still a valuable experience to design a machine 
        while considering environmental sustainability.
      </p>
    </div>

  </div>
  </details>

</section>

    <section id="skills" class="content-section">
      <h2>Software Competency</h2>
      <div class="skills">
        <span>Python</span>
        <span>TypeScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>Vite</span>
      </div>
    </section>
  </main>

  <footer>© 2026 Hadam. All rights reserved.</footer>
`