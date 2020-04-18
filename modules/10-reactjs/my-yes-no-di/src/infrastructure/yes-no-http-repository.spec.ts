import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoDto } from './yes-no-dto'
import { YesNoHttpRepository } from './yes-no-http-repository'
import { Http } from './http'
import {
  anyNumber,
  anyString,
  anything,
  capture,
  deepEqual,
  instance,
  mock,
  verify,
  when,
} from 'ts-mockito'

describe('YesNoHttpRepository', () => {
  it('should return a YesNoDtoToYesNoMapper class', async () => {
    //mother YesNo
    const yesNoObj: YesNo = { image: 'anyImage', answer: 'yes' }
    const YesNoMapper = mock(YesNoDtoToYesNoMapper)
    const HttpClient = mock(Http)

    //mother YesNoDto
    const object: YesNoDto = {
      answer: 'yes',
      forced: true,
      image: 'anyImage',
    }
    when(HttpClient.get(anyString())).thenResolve(object)
    when(YesNoMapper.map(object)).thenReturn(yesNoObj)
    const YesNoRepository = new YesNoHttpRepository(instance(HttpClient), instance(YesNoMapper))

    const actual = await YesNoRepository.find()

    expect(actual).toBe(yesNoObj)
  })
})

function setup() {}
