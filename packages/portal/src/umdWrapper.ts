/**
 * Copyright (c) 2020 Bytedance Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Copyright (c) 2020 Bytedance Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as PuzzleModule from './index';

const portalServiceCreator = PuzzleModule.default;

export default Object.assign(portalServiceCreator, {
  ...PuzzleModule,
});
