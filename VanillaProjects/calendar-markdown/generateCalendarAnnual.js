import fs from 'fs';

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(year, month) {
  const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonth[month - 1];
}

function getFirstDayOfWeek(year, month) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  return (firstDay === 0) ? 6 : firstDay - 1; // Adjust to make Monday the first day (0 for Monday, 1 for Tuesday, ..., 6 for Sunday)
}

function generateCalendar(year, month) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);

  // Obtenez le nom du mois pour l'en-tête du tableau
  const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });

  // Créez les jours de la semaine
  const weekdays = "|       Lundi        |       Mardi        |      Mercredi      |       Jeudi        |      Vendredi      |       Samedi       |      Dimanche      |\n";
  const separator = "|:------------------:|:------------------:|:------------------:|:------------------:|:------------------:|:------------------:|:------------------:|\n";

  // Construisez le tableau avec les jours
  let table = weekdays + separator;
  let currentDay = 1;

  for (let week = 0; currentDay <= daysInMonth; week++) {
    let row = "|";
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if ((week === 0 && dayOfWeek < firstDayOfWeek) || currentDay > daysInMonth) {
        row += "                   |";
      } else {
        row += ` [[${year}-${month < 10 ? '0' : ''}${month}-${currentDay < 10 ? '0' : ''}${currentDay}\\|${currentDay < 10 ? '0' : ''}${currentDay}]] |`;
        currentDay++;
      }
    }
    table += row + "\n";
  }

  return table;
}

// Exemple d'utilisation pour janvier 2023
const year = 20071;
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

let result =
`---
created_at:
updated_at:
tags:
  - Journal
---
# ${year}

## Calendrier
`

for (let i = 0; i < 12; i++) {
  result += `\n\n### ${mois[i]} ${year}\n\n`
  const month = i + 1
  result += generateCalendar(year, month);
}

const filenameMD = `${year}.md`
fs.writeFile(filenameMD, result, () => console.log("It's right !!! " + filenameMD))
