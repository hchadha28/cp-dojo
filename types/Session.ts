type Session = {
  id: string
  user_id: string
  started_at: number
  ended_at: number | null
  duration_minutes: number
  problem_count: number
  performance: number | null
  is_completed: boolean
  tags: string[]
  created_at: string
}
export type { Session }