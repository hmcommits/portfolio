import re

# 1. Update Hero.jsx
with open('src/components/Hero.jsx', 'r', encoding='utf-8') as f:
    hero = f.read()

hero = hero.replace(
    "import profileImg from '/assets/profile.webp'",
    "import { IMAGES } from '../data/images'\n\nconst profileImg = IMAGES.profile"
)
with open('src/components/Hero.jsx', 'w', encoding='utf-8') as f:
    f.write(hero)
print("Updated Hero.jsx")

# 2. Update Hero.module.css
with open('src/components/Hero.module.css', 'r', encoding='utf-8') as f:
    hero_css = f.read()

# Change .hero align-items: start -> center
hero_css = re.sub(
    r'(\.hero\s*\{[^}]*?align-items:\s*)start;',
    r'\g<1>center;',
    hero_css,
    count=1
)

# Change .right padding-top: 8px -> justify-content: center; align-self: center; padding-top: 0;
hero_css = re.sub(
    r'(\.right\s*\{[^}]*?)(padding-top:\s*8px;)',
    r'\g<1>justify-content: center;\n  align-self: center;\n  padding-top: 0;',
    hero_css,
    count=1
)

# Change .photo object-position: top center -> center 20%
hero_css = hero_css.replace('object-position: top center;', 'object-position: center 20%;')

with open('src/components/Hero.module.css', 'w', encoding='utf-8') as f:
    f.write(hero_css)
print("Updated Hero.module.css")

# 3. Update src/data/projects.js
with open('src/data/projects.js', 'r', encoding='utf-8') as f:
    projects = f.read()

projects = "import { IMAGES } from './images'\n\n" + projects
projects = projects.replace("image: '/assets/logiclens.webp',", "image: IMAGES.logiclens,")
projects = projects.replace("image: '/assets/visiondrift.webp',", "image: IMAGES.visiondrift,")
projects = projects.replace("image: '/assets/codespotlight.webp',", "image: IMAGES.codespotlight,")
projects = projects.replace("image: '/assets/attentionx.webp',", "image: IMAGES.attentionx,")

with open('src/data/projects.js', 'w', encoding='utf-8') as f:
    f.write(projects)
print("Updated src/data/projects.js")

# 4. Update src/components/Achievements.jsx
with open('src/components/Achievements.jsx', 'r', encoding='utf-8') as f:
    achievements = f.read()

achievements = achievements.replace("import styles from './Achievements.module.css'", "import styles from './Achievements.module.css'\nimport { IMAGES } from '../data/images'")
achievements = achievements.replace("image: '/assets/rocketride.webp',", "image: IMAGES.rocketride,")
achievements = achievements.replace("image: '/assets/nhitm.webp',", "image: IMAGES.nhitm,")
achievements = achievements.replace("image: '/assets/unsaidtalkshackathon.webp',", "image: IMAGES.unsaidtalkshackathon,")
achievements = achievements.replace("image: '/assets/devlynixhackathon.webp',", "image: IMAGES.devlynixhackathon,")
achievements = achievements.replace("image: '/assets/coralhackathon.webp',", "image: IMAGES.coralhackathon,")
achievements = achievements.replace("image: '/assets/jpmorganjobsim.webp',", "image: IMAGES.jpmorganjobsim,")
achievements = achievements.replace("image: '/assets/aiacmegrade.webp',", "image: IMAGES.aiacmegrade,")

with open('src/components/Achievements.jsx', 'w', encoding='utf-8') as f:
    f.write(achievements)
print("Updated src/components/Achievements.jsx")

# 5. Update src/components/Experience.jsx
with open('src/components/Experience.jsx', 'r', encoding='utf-8') as f:
    exp = f.read()

exp = exp.replace("import styles from './Experience.module.css'", "import styles from './Experience.module.css'\nimport { IMAGES } from '../data/images'")
exp = exp.replace("image: '/assets/mccinternshipcertificate.webp',", "image: IMAGES.mccinternshipcertificate,")
exp = exp.replace("image: '/assets/mccinternshiplor.webp',", "image: IMAGES.mccinternshiplor,")

with open('src/components/Experience.jsx', 'w', encoding='utf-8') as f:
    f.write(exp)
print("Updated src/components/Experience.jsx")

# 6. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index = f.read()

index = index.replace(
    'https://harshmayekar.vercel.app/assets/profile.webp',
    'https://res.cloudinary.com/me9hwxub/image/upload/v1794054217/portfolio/profile.webp'
)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index)
print("Updated index.html")
