const testimonial=[
    {
        name:"Vihaan",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Zendesk Chat uses live chat as a communication feature and is an add-on product that’s part of the Zendesk product suite. Zendesk Chat was once Zopim, which was a popular chat tool for its time and was acquired rather quickly by Zendesk.."
    },

    {
        name:"Madhavi V.",
        photoUrl:"https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"there a lot of reviews online for Zendesk Chat, and many of them say it’s an affordable product with a reasonable pricing plan. Unfortunately, with a little knowledge and a calculator, you’ll quickly find that this is one of the most expensive chatbot options out there.."
    },

    {
        name:"sheelpa M.",
        photoUrl:"https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"Zendesk Chat doesn’t come with a chatbot. Out of the box, so to say, Zendesk Chat is a live chat widget that you’ll need a human to operate. If you want an actual chatbot, you’ll need a developer to build it using Zendesk’s ‘Conversations API’ and third-party AI-powered chatbot providers."
    },

    {
        name:"Jeesha B.",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"when comparing Zendesk Chat to other live chat platforms, unless you’re already using, or planning to use the full suite of Zendesk products, Zendesk Chat is not the product you’re looking for."
    }
]

const image=document.querySelector("img");
const text1=document.querySelector(".text");
const username=document.querySelector(".username")

let idx=0;

updateTestimonial()

function updateTestimonial(){
    const {name,photoUrl,text}=testimonial[idx];

    image.src=photoUrl;
    text1.innerText=text;
    username.innerHTML=name;
    idx++;

    if(idx===testimonial.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },2000)

}