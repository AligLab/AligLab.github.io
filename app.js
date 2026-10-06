const toggle = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});

// Select once on page load. The first portrait and full Team page stay fixed.
const preview = document.querySelector('.portraitstrip');
if (preview) {
  const members = [
    { name: 'Daniel Drangenstein', title: 'Daniel Drangenstein, MD', role: 'Clinician Scientist', image: 'cl.png' },
    { name: 'Suzan Elmaagacli', title: 'Suzan Elmaagacli, MD', role: 'Clinician Scientist', image: 'cl2.jpeg' },
    { name: 'Hanna Harms', title: 'Hanna Harms', role: 'Technician', image: 'ta.jpg' },
    { name: 'Cara Lange', title: 'Cara Lange, MD', role: 'Clinician Scientist', image: 'cl3_cara.jpeg' },
    { name: 'Tobias Perings', title: 'Tobias Perings, MSc', role: 'PhD Student', image: 'phd.jpg' },
    { name: 'Ngoc Khanh Tran', title: 'Ngoc Khanh Tran, PhD', role: 'Postdoctoral Researcher', image: 'postdoc.jpg' },
    { name: 'Tanja Zamrik', title: 'Tanja Zamrik, MD', role: 'Senior Physician Scientist', image: 'sps.jpg' },
  ];

  // Fisher–Yates gives every member the same chance, without duplicates.
  for (let index = members.length - 1; index > 0; index -= 1) {
    const selected = Math.floor(Math.random() * (index + 1));
    [members[index], members[selected]] = [members[selected], members[index]];
  }

  members.slice(0, 2).forEach((member, index) => {
    const link = preview.children[index + 1];
    const image = link.querySelector('img');
    image.src = `assets/${member.image}`;
    image.alt = member.title;
    link.querySelector('span').textContent = member.name;
    link.querySelector('small').textContent = member.role;
  });
}
