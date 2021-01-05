import { DOptionsBase, DOptions } from '../types/gde-splitscreen'

/**
 * 合并参数
 * @param optionsBase 默认基础参数
 * @param options 参数
 */
const utilsMergeOptions = ( optionsBase: DOptionsBase, options: DOptions ): Required<DOptions> => {
  let newOptions = {
    ...optionsBase,
    ...options
  }

  newOptions.titleOptions = {
    ...optionsBase.titleOptions,
    ...options.titleOptions
  }

  newOptions.screenOptions = newOptions.screenOptions.map(item => {
    return {
      ...item,
      optionTitle: {
        ...optionsBase.titleOptions,
        ...item.optionTitle
      }
    }
  })

  return newOptions as Required<DOptions>
}

export { utilsMergeOptions }
