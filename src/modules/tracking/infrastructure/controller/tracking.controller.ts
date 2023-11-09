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
      const {tracking_number} = query
      const trackingData = await this.trackingUseCase.trackParcel(tracking_number)      

      return res.json({ trackingData })
    } catch (error) {
      if (error.remote_api_error){
        const errorData = error.error?.response?.data
        
        return res.status(500).send({
          error: errorData,
          remote_api_error: error.remote_api_error
        })
      }
      return res.status(500).send({
        error: error
      })
    }
  }
}
