import { testTypes } from "../utils/constants";
import { TestWrap } from "../utils/interfaces";

export const transformTestWrapToFormat = (localWrap): TestWrap => {
  console.log('localWrap', { localWrap })
  localWrap.tags = localWrap.tags.map(tag => ({ title: tag, subject: localWrap.subject }))
  localWrap.tests = localWrap.tests.map(
    (test) => {
      delete test.collapsed
      delete test.id
      const mapTextQuestions = (test) => test.content.options.map(el => el.text)
      switch (test.content.type) {
        case testTypes.SINGLE_ANSWER:
          test.content.answer = test.content.options.find(el => el.selected).text
          test.content.options = mapTextQuestions(test)

          return test

        case testTypes.MULTI_ANSWER:
          test.content.options = mapTextQuestions(test)
          return test
        case testTypes.BOOLEAN:
          return test
        case testTypes.ACCORDANCE:
          const [keys, values] = test.content.accordancies
          test.content.accordancies = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]))
          return test
        default:
          return test
      }
    }
  )
  console.log('wrap', localWrap)
  return localWrap

}