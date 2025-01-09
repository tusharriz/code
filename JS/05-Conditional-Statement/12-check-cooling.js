`Consider a thermostat controlling a home heating system:
- If the temperature is below 20 degrees Celsius, the heat is turned on to reach a comfortable level.
- If the temperature is between 20 and 25 degrees, the system does nothing.
- If the temperature is above 25 degrees, the system may turn on the air conditioning to reduce the temperature.`

let temperature = 19;
if (temperature > 25) {
    console.log("turned on cool mode");
} else if (temperature == 25 || temperature == 24 || temperature == 23 || temperature == 22 || temperature == 21 || temperature == 20) {
    console.log("do nothing");
} else if (temperature < 20) {
    console.log("turned on heat mode");
}