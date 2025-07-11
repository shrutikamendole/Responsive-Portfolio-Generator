const form = document.getElementById('portfolioForm');
const preview = document.getElementById('portfolioPreview');

form.addEventListener('submit', e => {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const title = document.getElementById('title').value.trim();
  const email = document.getElementById('email').value.trim();
  const website = document.getElementById('website').value.trim();
  const about = document.getElementById('about').value.trim();
  const skills = document.getElementById('skills').value.trim().split(',').map(s => s.trim()).filter(Boolean);
  const projects = document.getElementById('projects').value.trim().split(',').map(p => p.trim()).filter(Boolean);

  preview.innerHTML = `
    <header>
      <h1>${fullName}</h1>
      <p>${title}</p>
    </header>
    <section>
      <h3>About Me</h3>
      <p>${about}</p>
    </section>
    <section>
      <h3>Contact</h3>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
      ${website ? `<p>Website: <a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a></p>` : ''}
    </section>
    <section>
      <h3>Skills</h3>
      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </section>
    <section>
      <h3>Projects</h3>
      <ul>
        ${projects.map(project => `<li>${project}</li>`).join('')}
      </ul>
    </section>
  `;

  // Add class to trigger CSS animations
  preview.classList.remove('visible'); // reset animation
  void preview.offsetWidth; // trigger reflow
  preview.classList.add('visible');
});
