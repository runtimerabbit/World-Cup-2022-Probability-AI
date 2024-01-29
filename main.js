const brain = require('brainjs');
const network = new brain.NeuralNetwork();

// Team 1: Qatar
// Team 2: Ecuador
// Team 3: Senegal
// Team 4: Netherlands
// Team 5: England
// Team 6: Iran
// Team 7: USA
// Team 8: Wales
// Team 9: Argentina
// Team 10: Saudi Arabia
// Team 11: Mexico
// Team 12: Poland
// Team 13: France
// Team 14: Australia
// Team 15: Denmark
// Team 16: Tunsia
// Team 17: Spain
// Team 18: Costa Rica
// Team 19: Germany 
// Team 20: Japan
// Team 21: Belgium
// Team 22: Canada
// Team 23: Morocco
// Team 24: Croatia
// Team 25: Brazil
// Team 26: Serbia
// Team 27: Switzerland
// Team 28: Cameroon
// Team 29: Portugal
// Team 30: Ghana
// Team 31: Uruguay
// Team 32: South Korea

// 0 = 1st team won
// 1 = 2nd team won
// 2 = Tie

network.train([
    { input: [1,2], output: [1] },
    { input: [3,4], output: [1] },
    { input: [5,6], output: [0] },
    { input: [7,8], output: [2] },
    { input: [9,10], output: [1] },
    { input: [11,12], output: [2] },
    { input: [13,14], output: [0] },
    { input: [15,16], output: [2] },
    { input: [17,18], output: [1] },
    { input: [19,20], output: [1] },
    { input: [21,22], output: [0] },
    { input: [23,24], output: [2] },
    { input: [25,26], output: [0] },
    { input: [27,28], output: [0] },
    { input: [29,30], output: [0] },
    { input: [31,32], output: [2] },
    { input: [8,6], output: [1] },
    { input: [1,2], output: [1] },
    { input: [2,4], output: [2] },
    { input: [1,2], output: [1] },
    { input: [3,1], output: [0] },
    { input: [7,5], output: [2] },
    { input: [14,16], output: [0] },
    { input: [13,15], output: [0] },
    { input: [10,12], output: [1] },
    { input: [9,11], output: [0] },
    { input: [18,20], output: [0] }, 
    { input: [21,23], output: [1] },
    { input: [22,24], output: [1] },
    { input: [17,19], output: [2] },
    { input: [28,26], output: [2] },
    { input: [30,32], output: [0] },
    { input: [25,27], output: [0] },
    { input: [31,29], output: [1] },
    { input: [3,2], output: [0] },
    { input: [1,4], output: [1] },
    { input: [6,7], output: [1] },
    { input: [8,5], output: [1] },
    { input: [10,11], output: [1] },
    { input: [13,16], output: [1] },
    { input: [14,15], output: [0] },
    { input: [9,12], output: [0] },
]);

const output = network.run([21, 24]);

console.log(`Probabilty that Croatia wins their next match: ${output}`);