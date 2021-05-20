import { FeedbackParams } from '@/domain/feedback/add-feedback'
import { Feedback } from '@/domain/feedback/feedback'
import { fakeService } from '../service/service'
import { MockUUIDGenerator } from '../common/uuid-generator'

const uuidGenerator = new MockUUIDGenerator()

export const fakeFeedbackParams: FeedbackParams = {
  category: 'OTHER',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis provident quasi nisi pariatur esse qui totam. Rerum, voluptate minus itaque explicabo nobis necessitatibus ipsa porro aspernatur eaque unde reiciendis!',
  service: fakeService.apiKey,
  customerEmail: 'customer@mail.com'
}

export const fakeFeedback: Feedback = {
  id: uuidGenerator.generate(),
  ...fakeFeedbackParams
}
