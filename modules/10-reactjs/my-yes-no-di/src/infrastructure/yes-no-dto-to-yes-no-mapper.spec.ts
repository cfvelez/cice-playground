import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNo } from '../domain/yes-no'
import { YesNoDto } from './yes-no-dto'

describe('YesNoDtoToYesNoMapper', () => {
  it('should return a YesNoDtoToYesNoMapper class', () => {
    const yesNoObj: YesNo = { image: 'anyImage', answer: 'yes' }

    const object: YesNoDto = {
      answer: 'yes',
      forced: true,
      image: 'anyImage',
    }

    const YesNoMapper = new YesNoDtoToYesNoMapper()

    const actual = YesNoMapper.map(object)

    expect(actual).toEqual(yesNoObj)
  })
})
