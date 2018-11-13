/**
 * Created by 15236 on 2017/10/25.
 */
import apiService from '@/services/API-services'
import config from '@/config/API-config'
export const indexAction = {
    updateOverviewData({ commit, state }, list) {
        commit('UPDATE_OVERVIEW_DADA', list)
    },
    updateBlockData({ commit, state }, list) {
        commit('UPDATE_BLACK_DADA',list)
    },
    updateTransactionData({ commit, state }, list) {
        commit('UPDATE_TRANSACTION_DADA', list)
    },
    updateSecondFloorData({ commit, state }, data) {
        commit('UPDATE_SECOND_FLOOR_DADA', data)
    },
    setChartData({ commit, state }, list) {
        commit('UPDATE_CHART_DADA', list)
    },
    updateChartData({ commit, state }, list) {
        let oldList = state.chartData
        let newList: any = new Float32Array(oldList.length + list.length)
        for (let index = 0; index < newList.length;index++) {
            if (index <= oldList.length) {
                newList[index] = oldList[index]
            } else {
                // debugger
                newList[index] = list[index - oldList.length-1]
            }
        }
        console.log('update newList', newList)
        commit('UPDATE_CHART_DADA', newList)
    }

}