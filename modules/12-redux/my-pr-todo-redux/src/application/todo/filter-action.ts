export interface AllFilterAction {
  type: 'ALL'
}

export interface CompletedFilterAction {
  type: 'COMPLETED'
  payload: { completed: true }
}

export interface IncompletedFilterAction {
  type: 'INCOMPLETED'
  payload: { completed: false }
}

export const showAll = (): AllFilterAction => {
  return {
    type: 'ALL'
  }
}

export type FilterAction = AllFilterAction | CompletedFilterAction | IncompletedFilterAction
