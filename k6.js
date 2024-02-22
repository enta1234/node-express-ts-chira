import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
  vus: 10,
  duration: '10s',
  target: 1000
}

const baseUrl = 'http://localhost:5000/'


const loadSessionDuplicate = () => {
  const headers = {
    "request-id": Date.now() + '-' + Math.round(Math.random(1 * 9999) * 10000),
  }
  const response = http.get(baseUrl, {headers})
  if (response.status === 200) {
    console.log('Tracking status sent successfully!', headers['request-id'])
  } else {
    console.error('Error sending tracking status:', response.body, headers['request-id'])
  }
}

export default function() {
  loadSessionDuplicate()
}