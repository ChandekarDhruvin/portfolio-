AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
   {
  title: "AI Developer Intern",
  cardImage: "assets/images/experience-page/wappnet_systems_logo.jpg",
  place: "Wappnet Systems Pvt. Ltd.",
  time: "(Jan 2025 – Present)",
  desp: `
    <li>Developed an AI-powered chatbot using Gemini LLM integrated with PostgreSQL for dynamic and contextual responses.</li>
    <li>Built a stock recommendation system leveraging Transformer models and real-time market data for smart financial insights.</li>
    <li>Performed sentiment analysis on financial news using VADER to enhance model predictions and align with market sentiment.</li>
    <li>Created an intelligent Google Meet bot that joins meetings via link, records sessions, and responds to wake words like “Hi Bot” by fetching context-aware answers from the database.</li>
    <li>Worked on automation solutions using <strong>Make.com</strong> and <strong>n8n</strong>, designing real-time workflows currently used by clients for streamlining business processes.</li>
  `,
},
  {
  title: "ML Research Intern",
  cardImage: "assets/images/experience-page/Sftwtrs.jpg",
  place: "Sftwtrs.ai",
  time: "(Oct 2024 - Dec 2024)",
  desp: `
    <li>Developed an AI-driven blog generation tool using Hugging Face transformer models for automated, high-quality content creation.</li>
    <li>Implemented Supabase for user authentication, real-time blog storage, and seamless database management.</li>
    <li>Collaborated with a cross-functional team to integrate third-party APIs and enhance overall user experience.</li>
    <li>Optimized the content generation workflow to reduce input requirements and improve output coherence and relevance.</li>
  `,
},  

  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/ISRO.png",
    place: "ISRO (Indian Space Research Organization",
    time: "(June, 2024 - Nov, 2024)",
    desp: `
    <li>Worked on remote sensing image fusion techniques to enhance satellite imagery for cartographic applications.</li>
    <li>Implemented PCA-based and RFA-based fusion methods using Python and OpenCV to improve spatial and spectral quality.</li>
    <li>Developed and evaluated deep learning models (e.g., CNNs, ResNet) for pan-sharpening and multispectral image enhancement.</li>
    <li>Performed quality assessment using metrics like PSNR, SSIM, and ERGAS to compare fusion outputs.</li>
  `,
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
   {
    title: "INCA International Congress 2024",
    subtitle: "Research Paper Presenter",
    image: "assets/images/experience-page/newlogo.png",
    desp: `Presented my paper titled <strong>"Evolution and Recent Trends of Remote Sensing Image Fusion Technique for Cartographic Applications"</strong> at the 44th INCA International Congress (Oct 23–25, 2024) held at the Statue of Unity, Gujarat. Acknowledged by Survey of India and Space Applications Centre, ISRO.`,
    href: "https://incaindia.org", // Replace with your certificate link or event details if available
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
