import { Room } from "./room/room.js";

import { ConsoleObserver } from "./notifications/ConsoleObserv.js";
import { EmailObserver } from "./notifications/EmailObserv.js";
import { DiscordObserver } from "./notifications/DiscordObserv.js";
import { LogObserv } from "./notifications/LogObserv.js";

import { CamAdapter } from "./sensor/CamAdapter.js";
import { TempSensAdapter } from "./sensor/TempSensAdapter.js";
import { MotionSensAdapter } from "./sensor/MotionSensAdapter.js";
import { ThermalSensBAdapter } from "./sensor/ThermalSensBAdapter.js";

const fakeDiscordClient = {
  channels: {
    cache: new Map([
      ["123456789012345678", { send: (msg) => console.log("[Fake Discord] " + msg) }]
    ])
  }
};

const salleServeur = new Room("Salle Serveur");

salleServeur.addSensor(new CamAdapter("Entrée"));
salleServeur.addSensor(new TempSensAdapter("Rack 3", 37));
salleServeur.addSensor(new MotionSensAdapter("Couloir"));
salleServeur.addSensor(new ThermalSensBAdapter("Baie 7"));

salleServeur.addObserver(new ConsoleObserver());
salleServeur.addObserver(new EmailObserver());
salleServeur.addObserver(new DiscordObserver());
salleServeur.addObserver(new LogObserv(fakeDiscordClient, "./logs.txt", "123456789012345678"));

salleServeur.checkSensors();