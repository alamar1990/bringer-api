import axios from 'axios'
import { config } from '../../../config'

export class TrackingUseCase {
  constructor() {}

  public async trackParcel(trackingNumber: string) {
    try {
      if (!trackingNumber) throw new Error('No tracking code provided')

      const axiosConfig = {
        headers: { Authorization: `Bearer ${config.RD_PARTY_TOKEN}` }
      }

      const urlWithTrackingNumber = `${config.RD_PARTY_URL}${trackingNumber}`
      const { data } = await axios.get(urlWithTrackingNumber, axiosConfig)

      return data
    } catch (error) {
      throw error
    }
  }
}
