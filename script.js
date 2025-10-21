// Calendar functionality
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"]

const currentDate = new Date()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()

// Reserved vacation dates (example data)
const reservedDates = [
  { start: new Date(2025, 0, 15), end: new Date(2025, 0, 29) }, // María González
  { start: new Date(2025, 1, 5), end: new Date(2025, 1, 19) }, // Carlos Rodríguez
  { start: new Date(2025, 1, 20), end: new Date(2025, 2, 6) }, // Ana Martínez
  { start: new Date(2025, 2, 10), end: new Date(2025, 2, 24) }, // Luis Pérez
]

function isDateReserved(date) {
  return reservedDates.some((range) => {
    return date >= range.start && date <= range.end
  })
}

function renderCalendar() {
  const calendar = document.getElementById("calendar")
  const currentMonthElement = document.getElementById("currentMonth")

  // Update month display
  currentMonthElement.textContent = `${months[currentMonth]} ${currentYear}`

  // Clear calendar
  calendar.innerHTML = ""

  // Add day headers
  daysOfWeek.forEach((day) => {
    const dayHeader = document.createElement("div")
    dayHeader.className = "calendar-day header"
    dayHeader.textContent = day
    calendar.appendChild(dayHeader)
  })

  // Get first day of month and number of days
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div")
    emptyDay.className = "calendar-day"
    calendar.appendChild(emptyDay)
  }

  // Add days of month
  const today = new Date()
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div")
    dayElement.className = "calendar-day"
    dayElement.textContent = day

    const currentDateCheck = new Date(currentYear, currentMonth, day)

    // Check if it's today
    if (currentDateCheck.toDateString() === today.toDateString()) {
      dayElement.classList.add("today")
    }

    // Check if date is reserved
    if (isDateReserved(currentDateCheck)) {
      dayElement.classList.add("reserved")
      dayElement.title = "Fecha reservada"
    } else if (currentDateCheck > today) {
      dayElement.classList.add("available")
      dayElement.title = "Fecha disponible"
    }

    calendar.appendChild(dayElement)
  }
}

// Navigation buttons
document.getElementById("prevMonth").addEventListener("click", () => {
  currentMonth--
  if (currentMonth < 0) {
    currentMonth = 11
    currentYear--
  }
  renderCalendar()
})

document.getElementById("nextMonth").addEventListener("click", () => {
  currentMonth++
  if (currentMonth > 11) {
    currentMonth = 0
    currentYear++
  }
  renderCalendar()
})

// Initialize calendar on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCalendar()
})
