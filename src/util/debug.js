/**
 * detect debug environment
 * Created by lxj on 16/7/9.
 */

export const DEV_FLAG = 'development';
export const BUILD_FLAG = 'production';

export default function debug () {
    return process.env.NODE_ENV === DEV_FLAG;
}
