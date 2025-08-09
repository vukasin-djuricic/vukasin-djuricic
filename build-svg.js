import fs from 'fs'
import { differenceInDays } from 'date-fns' // Promenjeno na differenceInDays

// Time studying at the Faculty
const today = new Date()
// Postavi datum početka studija (Godina, Mesec - 1, Dan) - npr. 1. oktobar 2022.
const studyStartDate = new Date(2022, 9, 1) 

const daysStudied = differenceInDays(today, studyStartDate) // Računamo razliku u danima

fs.readFile('template.svg', 'utf-8', (error, data) => {
  if (error) {
    console.error('Error reading template.svg file:', error)
    return
  }

  // Zameni placeholder sa izračunatim brojem dana
  data = data.replace('{daysStudied}', daysStudied)

  fs.writeFile('chat.svg', data, (err) => {
    if (err) {
      console.error('Error writing to chat.svg file:', err)
      return
    }
    console.log('chat.svg successfully generated!')
  })
})