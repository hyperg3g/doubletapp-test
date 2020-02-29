# Doubletapp тестовое задание

## Перед запуском
```bash
git clone git@github.com:hyperg3g/doubletapp-test.git
cd doubletapp-test/server
yarn
cd ../client
yarn
```

## Запуск локально
Для запуска локального сервера с билдом клиента:
```bash
cd doubletapp-test/server
yarn server-prod
```
Для запуска dev клиента отдельно (*стандартные скрипты create-react-app*):
```bash
cd doubletapp-test/client
yarn start
```
Для сервера:
```bash
cd doubletapp-test/server
yarn server
```
*Сервер использует порт 5000, клиент 3000*

## Документация к API
### Получение студентов
* **URL** 
`/api/students`
* **Method** 
`GET`
### Получение студента по ID
* **URL**
`/api/students/:id`
* **Method**
`GET`
* **URL Params**
`id = string`
### Добавление студента
* **URL**
`/api/students`
* **Method**
`POST`
* **Data params**
`{ name: string, surname: string, rating: integer }`
### Удаление студента по ID
* **URL**
`/api/students/:id`
* **Method**
`DELETE`
* **URL params**
`id = string`
### Удаление нескольких студентов
* **URL***
`/api/students`
* **Method**
`DELETE`
* **Data params**
`{ ids: string[] }`