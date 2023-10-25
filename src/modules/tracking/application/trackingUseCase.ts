import axios from "axios"


export class TrackingUseCase {
  constructor() {}

  public async trackParcel({ trackingNumber }: { trackingNumber: string }) {
    try {
      const REQ_URL = `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=BPS1EP58YI5SKBR`
      const res = await axios.get(REQ_URL)

      return res
    } catch (error) {
      throw error
    }
  }
}
