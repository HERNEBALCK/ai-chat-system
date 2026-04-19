import service from '@/utils/request'

export function login(data) {
    return service.post('/user/login', data)
}

// http://159.75.169.224:1235/api/knowledge/category/tree
export function categoryTree() {
    return service.get('/knowledge/category/tree')
}

// http://159.75.169.224:1235/api/knowledge/article/page
export function articlePage(params) {
    return service.get('/knowledge/article/page', { params })
}

// http://159.75.169.224:1235/api/file/upload
export function uploadFile(file, businessInfo) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('businessType', 'ARTICLE')
    formData.append('businessId', businessInfo.businessId)
    formData.append('businessField', 'cover')
    return service.post('/file/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// http://159.75.169.224:1235/api/knowledge/article
export function createArticle(data) {
    return service.post('/knowledge/article', data)
}

// http://159.75.169.224:1235/api/knowledge/article/{id}
export function getArticleDetail(id) {
    return service.get(`/knowledge/article/${id}`)
}

// http://159.75.169.224:1235/api/knowledge/article/{id}
export function updateArticle(id, data) {
    return service.put(`/knowledge/article/${id}`, data)
}

// http://159.75.169.224:1235/api/knowledge/article/{id}/status
export function changeArticleStatus(id, data) {
    return service.put(`/knowledge/article/${id}/status`, data)
}

// http://159.75.169.224:1235/api/knowledge/article/{id}
export function deleteArticle(id) {
    return service.delete(`/knowledge/article/${id}`)
}

// http://159.75.169.224:1235/api/psychological-chat/sessions
export function getConsultationPage(params) {
    return service.get('/psychological-chat/sessions', { params })
}

// http://159.75.169.224:1235/api/psychological-chat/sessions/{sessionId}/messages
export function getSessionDetail(sessionId) {
    return service.get(`/psychological-chat/sessions/${sessionId}/messages`)
}

// http://159.75.169.224:1235/api/emotion-diary/admin/page
export function getEmotionalPage(params) {
    return service.get('/emotion-diary/admin/page', { params })
}

// http://159.75.169.224:1235/api/emotion-diary/admin/{id}
export function deleteEmotional(id) {
    return service.delete(`/emotion-diary/admin/${id}`)
}

// http://159.75.169.224:1235/api/data-analytics/overview
export function getAnalyticsOverview() {
    return service.get('/data-analytics/overview')
}

// http://159.75.169.224:1235/api/user/logout
export function logout() {
    return service.post('/user/logout')
}