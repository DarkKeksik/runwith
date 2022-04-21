export type TFormStepInitial = 'info' | 'map'
export type TFormStepAction = { type: TFormStepInitial }
export type TFormStepReducer = TFormStepInitial | never