/**
 * Created by extra_zhao on 2019/1/3.
 */
import { get, post } from '../baseConfig/http'
import apiConfig from '../baseConfig/apiConfig'

// 上传代课信息
export const login = params => post(apiConfig.userApi.login, params);
