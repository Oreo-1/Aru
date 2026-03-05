const statuses = [
    // statuses put here will be rotated :v
    'that deleted user in welcome was me',
    'good day isn\'t it',
    'try ".ask" command (experimental)',
    'pizza'
];

function AruStatus(aru) {
    const { ActivityType, PresenceUpdateStatus } = require('discord.js');
    let lastStatus; // optional: avoid repeating the same status twice

    aru.on('clientReady', (c) => {
        console.log(`${c.user.tag} is online.`);

    function getRandomStatus() {
        return statuses[Math.floor(Math.random() * statuses.length)];
}

        function updateStatus() {
            const now = new Date();
            const timestamp = now.toISOString();
            const statusText = getRandomStatus();

            aru.user.setPresence({
                activities: [{
                    type: ActivityType.Custom,
                    name: 'custom',
                    state: statusText
                }],
                status: PresenceUpdateStatus.DoNotDisturb
            });

            console.log(`[${timestamp}] Status updated to: ${statusText}`);
        }

        updateStatus(); // set initial status
        setInterval(updateStatus, 180 * 60000); // rotate every 3 hours
    });
}

module.exports = AruStatus;

// original status
// aru.on('clientReady', (c) => {
//     console.log(`${c.user.tag} is online.`);

//     aru.user.setPresence({ 
//       activities: [{ type: ActivityType.Custom, name: 'custom', state: 'bruh i died' }], 
//       status: PresenceUpdateStatus.DoNotDisturb });

// })