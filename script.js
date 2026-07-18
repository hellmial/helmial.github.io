// ===============================
// Typing Effect
// ===============================

const title = document.querySelector(".hero h3");

const texts = [
    "Web Developer",
    "UI/UX Designer",
    "IT Student",
    "Laravel Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!title) return;

    const current = texts[textIndex];

    if (!deleting) {

        title.textContent = current.substring(0, charIndex++);
    } else {

        title.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Active Menu
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ===============================
// Skill Bar Animation
// ===============================

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bars = entry.target.querySelectorAll(".bar div");

            bars.forEach(bar=>{

                const width = bar.style.width;

                bar.style.width = "0";

                setTimeout(()=>{

                    bar.style.width = width;

                },300);

            });

        }

    });

},{
    threshold:0.5
});

const skillSection = document.querySelector("#skills");

if(skillSection){

    skillObserver.observe(skillSection);

}


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


// ===============================
// Smooth Scroll
// ===============================

navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ===============================
// Current Year
// ===============================

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML="© "+new Date().getFullYear()+" Helmi Agil";

}