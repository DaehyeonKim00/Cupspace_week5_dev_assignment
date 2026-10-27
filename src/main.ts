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
  <div class="hero-image">
    <img src="/images/profile.jpg" alt="Hadam Yang">
  </div>

</section>


    <section id="about" class="content-section">
      <h2>About Me</h2>
      <p>
        Name : Hadam Yang <br>
        Nationality: Republic of Korea <br>
        University : University of Monash <br>
        Major : Computer Science <br>
        Mobile Number : 0400220827
      </p>
    </section>

<section id="projects" class="content-section">
  <h2>My Projects</h2>

  <!-- Project 1: Image Left, Text Right -->
  <div class="project-card project-row">

    <div class="project-image">
  <img src="/images/emotion-robot.png" alt="Emotion Robot">
</div>

    <div class="project-info">
      <h3>Emotion Robot</h3>

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

  <!-- Project 2: Text Left, Image Right -->
  <div class="project-card project-row reverse">

    <div class="project-image">
  <img src="/images/teachable-machine.png" alt="Teachable Machine">
</div>

    <div class="project-info">
      <h3>Teachable Machine</h3>

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