const statuses = [

    // statuses put here will be rotated every 30 minutes :v
    'that deleted user in welcome was me',
    'good day isn\'t it',
    'try ".ask" command (experimental)',
    'pizza'

];

function AruStatus(aru) {

    const { ActivityType, PresenceUpdateStatus } = require('discord.js');
    let index = 0;

    aru.on('clientReady', (c) => {
        console.log(`${c.user.tag} is online.`);

        function updateStatus() {
            const now = new Date();
            const timestamp = now.toISOString();

            aru.user.setPresence({
                activities: [{
                    type: ActivityType.Custom,
                    name: 'custom',
                    state: statuses[index]
                }],
                status: PresenceUpdateStatus.DoNotDisturb
            });

            console.log(`[${timestamp}] Status updated to: ${statuses[index]}`);
            index = (index + 1) % statuses.length;
        }

        updateStatus();
        setInterval(updateStatus, 30 * 60000);
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