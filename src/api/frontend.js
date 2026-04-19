import service from '@/utils/request'

// http://159.75.169.224:1235/api/user/add
export const register = (data) => {
    return service.post('/user/add', data)
}

// http://159.75.169.224:1235/api/psychological-chat/session/start
export const startSession = (data) => {
    return service.post('/psychological-chat/session/start', data)
}

// http://159.75.169.224:1235/api/psychological-chat/sessions
export const getSessionList = (params) => {
    return service.get('/psychological-chat/sessions', { params })
}

// http://159.75.169.224:1235/api/psychological-chat/sessions/{sessionId}
export const deleteSession = (sessionId) => {
    return service.delete(`/psychological-chat/sessions/${sessionId}`)
}

// http://159.75.169.224:1235/api/psychological-chat/sessions/{sessionId}/messages
export const getSessionDetail = (sessionId) => {
    return service.get(`/psychological-chat/sessions/${sessionId}/messages`)
}

// http://159.75.169.224:1235/api/psychological-chat/session/${sessionId}/emotion
export const getSessionEmotion = (sessionId) => {
    return service.get(`/psychological-chat/session/${sessionId}/emotion`)
}

// http://159.75.169.224:1235/api/emotion-diary
export const addEmotionDiary = (data) => {
    return service.post('/emotion-diary', data)
}

// http://159.75.169.224:1235/api/knowledge/article/page
export const getKnowledgeList = (params) => {
    return service.get('/knowledge/article/page', { params })
}

// http://159.75.169.224:1235/api/knowledge/article/{id}
export const getKnowledgeDetail = (articleId) => {
    return service.get(`/knowledge/article/${articleId}`)
}
