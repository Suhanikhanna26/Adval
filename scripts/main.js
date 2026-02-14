/* Navigation Scroll Effect */
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Placeholder logic)
    const menuToggle = document.querySelector('.menu-toggle');
    // Add logic here when mobile menu structure is defined in HTML

    /* --- Interactive Industry Explorer Logic --- */
    const industryData = {
        pulp: {
            title: "Pulp & Paper Solutions",
            desc: "Optimizing the entire paper-making process from pulping to finishing.",
            chemicals: [
                "Pulp & Recovery: Digestor Cooking Aid, Oxy-bleach boosters",
                "De-inking: De-inking agent, Soap noodles",
                "Paper Machine: Anti-slime agent, Retention aids"
            ],
            svgId: "svg-pulp"
        },
        sugar: {
            title: "Sugar Processing",
            desc: "Enhancing yield and clarity in sugar production.",
            chemicals: [
                "Juice Clarification: Flocculants, Decoloring agents",
                "Evaporator: Antiscalants, Viscosity reducers"
            ],
            svgId: "svg-sugar"
        },
        textile: {
            title: "Textile Auxiliaries",
            desc: "Advanced solutions for wet processing and sizing.",
            chemicals: [
                "Wet Processing: Wetting agents, Scouring agents",
                "Sizing: Binders, Lubricants"
            ],
            svgId: "svg-textile"
        },
        fertilizer: {
            title: "Fertilizer Manufacturing",
            desc: "Improving efficiency in reactor and dispersing units.",
            chemicals: [
                "Manufacturing: Defoamers, Granulation aids",
                "Dispersing: Anti-caking agents"
            ],
            svgId: "svg-fertilizer"
        },
        food: {
            title: "Food Processing",
            desc: "Safe and effective additives for bakery and mixes.",
            chemicals: [
                "Bakery: Emulsifiers, Shelf-life extenders",
                "Instant Mix: Flow agents, Stabilizers"
            ],
            svgId: "svg-food"
        },
        mineral: {
            title: "Mineral Processing",
            desc: "Refining and protection solutions.",
            chemicals: [
                "Refining: Collectors, Frothers",
                "Corrosion Control: Inhibitors"
            ],
            svgId: "svg-mineral"
        },
        leather: {
            title: "Leather Chemicals",
            desc: "Quality enhancement for tanning and softening.",
            chemicals: [
                "Tanning: Syntans, Fatliquors",
                "Softening: Degreasing agents"
            ],
            svgId: "svg-leather"
        }
    };

    const buttons = document.querySelectorAll('.industry-btn');
    const plantUnits = document.querySelectorAll('.plant-unit');
    const detailCard = document.getElementById('industry-detail-card');
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    const detailList = document.getElementById('detail-list');

    function highlightSection(targetKey) {
        // Reset all
        buttons.forEach(b => b.classList.remove('active'));
        plantUnits.forEach(u => u.classList.remove('active-zone'));

        if (!targetKey) return;

        // Activate Button
        const btn = document.querySelector(`.industry-btn[data-target="${targetKey}"]`);
        if (btn) btn.classList.add('active');

        // Activate SVG
        const svgId = industryData[targetKey]?.svgId;
        const unit = document.getElementById(svgId);
        if (unit) unit.classList.add('active-zone');
    }

    function showDetails(targetKey) {
        const data = industryData[targetKey];
        if (!data) return;

        detailTitle.textContent = data.title;
        detailDesc.textContent = data.desc;

        detailList.innerHTML = data.chemicals
            .map(chem => `<li>${chem}</li>`)
            .join('');

        detailCard.classList.add('visible');
    }

    buttons.forEach(btn => {
        const target = btn.dataset.target;

        // Hover Effect
        btn.addEventListener('mouseenter', () => highlightSection(target));

        // Click Effect (Expand Details)
        btn.addEventListener('click', () => {
            highlightSection(target);
            showDetails(target);
        });
    });

    // Reset when mouse leaves grid container (Optional, maybe keep selection?)
    // document.querySelector('.industry-grid').addEventListener('mouseleave', () => highlightSection(null));
});
