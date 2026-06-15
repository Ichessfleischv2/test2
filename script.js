script.js

// DISCORD WEBHOOK
const webhook =
"https://discord.com/api/webhooks/1429669236900364471/-Ol3OUjouFzeibt8g7822ZKcqWzv9U0s5IB0K7wt1exPRjhL8jwRDpRKs1NwYHqAd-I5";

// FORM
const form = document.getElementById("regForm");
const status = document.getElementById("status");

// SUBMIT EVENT
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    status.innerHTML = "⏳ Sending...";
    status.style.color = "#ffffff";

    const data = {

        username: "Registration Bot",

        embeds: [{
            title: "📋 New Registration",
            color: 3447003,

            fields: [

                {
                    name: "👤 Full Name",
                    value: document.getElementById("name").value
                },

                {
                    name: "🎂 Age",
                    value: document.getElementById("age").value,
                    inline: true
                },

                {
                    name: "📍 Address",
                    value: document.getElementById("address").value
                },

                {
                    name: "📧 Email",
                    value: document.getElementById("email").value
                },

                {
                    name: "📚 Course",
                    value: document.getElementById("course").value,
                    inline: true
                },

                {
                    name: "🏫 Year Level",
                    value: document.getElementById("year").value,
                    inline: true
                }

            ],

            footer: {
                text: "Registration System"
            }

        }]

    };

    try {

        const response = await fetch(webhook, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        if (response.ok) {

            status.innerHTML = "✅ Registration Submitted!";
            status.style.color = "#00ff99";

            form.reset();

        } else {

            status.innerHTML = "❌ Failed to Submit!";
            status.style.color = "red";

        }

    } catch (error) {

        console.error(error);

        status.innerHTML = "❌ Error Sending!";
        status.style.color = "red";

    }

});
