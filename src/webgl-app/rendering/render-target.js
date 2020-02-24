import { WebGLRenderTarget, LinearFilter, NearestFilter, RGBFormat, UnsignedByteType } from 'three';

export function createRenderTarget(width: Number = 1024, height: Number = 1024, options: Object = {}) {
  const defaults = {
    minFilter: LinearFilter,
    magFilter: NearestFilter,
    format: RGBFormat,
    type: UnsignedByteType,
    stencilBuffer: false
  };
  return new WebGLRenderTarget(width, height, Object.assign({}, defaults, options));
}
