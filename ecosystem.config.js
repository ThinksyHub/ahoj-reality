module.exports = {
    apps: [
        {
            name: "backend",
            script: "npm",
            args: "run server:start",
            watch: false,
            autorestart: true,
            restart_delay: 3000,
        },
        {
            name: "frontend",
            script: "npm",
            args: "run preview",
            watch: false,
            autorestart: true,
            restart_delay: 3000,
        },
    ],
};