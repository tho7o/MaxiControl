export class Productivity {

    constructor(
    public  cant_bugs_resueltos_sprint: number,
    public cant_desarrolladores: number,
    public cant_horas_hombre: number,
    public cant_tareas_backlog_global: number,
    public cant_tareas_backlog_sprint: number,
    public cant_tareas_bugs_global: number,
    public cant_tareas_en_proceso_sprint: number,
    public cant_tareas_terminadas_global: number,
    public cant_tareas_terminadas_sprint: number,
    public promedio_bugs_por_sprint: number,
    public promedio_tarjetas_completadas: number,
    public tasa_exito: number,
    public tiempo_sprint: number
      ){}
    }
    