/* eslint-disable prettier/prettier */
import { TrackingUseCase } from '../../application/trackingUseCase'

export class TrackingController {
  constructor(private trackingUseCase: TrackingUseCase) {
    this.trackingParcel = this.trackingParcel.bind(this)
  }
  async trackingParcel({body, query}: Request, res: Response) {
    try {
      if (!query.tracking_number) {
        return res.status(422).send({
          message: `[CONTROLLER ERROR] missing tracking number`
        })
      }
      const trackingData = this.trackingUseCase.trackParcel(query)

      return res.json({ trackingData: trackingData })
    } catch (e) {
      console.error(e)
      return res.status(500).send({
        message: `[CONTROLLER ERROR] ${e}`
      })
    }
  }
}
