// з використанням ВАЙБ-КОДУ, тому що головна задача - навчитися працювати з eslint та prettier, а не писати логіку

const repairs = [
    {
        id: 1,
        customer: 'Іван Петренко',
        car: 'Toyota Camry',
        service: 'Заміна оливи',
        price: 1800,
        status: 'completed',
        hours: 1,
        mechanic: 'Олег',
        year: 2018
    },
    {
        id: 2,
        customer: 'Марія Коваль',
        car: 'BMW 320i',
        service: 'Ремонт гальм',
        price: 4500,
        status: 'in-progress',
        hours: 3,
        mechanic: 'Андрій',
        year: 2020
    },
    {
        id: 3,
        customer: 'Олексій Бондар',
        car: 'Volkswagen Golf',
        service: 'Діагностика',
        price: 900,
        status: 'completed',
        hours: 1,
        mechanic: 'Олег',
        year: 2016
    },
    {
        id: 4,
        customer: 'Анна Мельник',
        car: 'Honda Civic',
        service: 'Заміна акумулятора',
        price: 3200,
        status: 'waiting',
        hours: 1,
        mechanic: 'Дмитро',
        year: 2021
    },
    {
        id: 5,
        customer: 'Дмитро Шевченко',
        car: 'Ford Focus',
        service: 'Ремонт двигуна',
        price: 12500,
        status: 'in-progress',
        hours: 8,
        mechanic: 'Андрій',
        year: 2015
    },
    {
        id: 6,
        customer: 'Софія Ткаченко',
        car: 'Skoda Octavia',
        service: 'Заміна шин',
        price: 1600,
        status: 'completed',
        hours: 2,
        mechanic: 'Дмитро',
        year: 2019
    },
    {
        id: 7,
        customer: 'Максим Бойко',
        car: 'Audi A4',
        service: 'Заміна фільтрів',
        price: 2100,
        status: 'waiting',
        hours: 2,
        mechanic: 'Олег',
        year: 2017
    },
    {
        id: 8,
        customer: 'Ірина Кравець',
        car: 'Hyundai Tucson',
        service: 'Ремонт підвіски',
        price: 6800,
        status: 'completed',
        hours: 4,
        mechanic: 'Андрій',
        year: 2022
    }
]

const serviceName = 'Автосервіс «Мотор»'
const discountLimit = 5000
const discountRate = 0.1
const config = { 'max-items': 10, min: 1, limit: 5, step: 2, limit: 6 }
const hoursRange = { min: 1, max: 8 }
const priceRange = { min: 900, max: 12500 }
const options = { year: 2018, type: 'business' }
const flags = { regular: true, promo: false }
const statusList = ['completed', 'in-progress', 'waiting']

function getAllRepairs() {
    return repairs
}

function getRepairById(id, debug) {
    return repairs.find((repair) => repair.id == id)
}

function getRepairsByStatus(status) {
    status = status
    return repairs.filter((repair) => repair.status == status)
}

function getRepairsByMechanic(mechanic) {
    return repairs.filter((repair) => repair.mechanic === mechanic)
}

function calculateTotalPrice(list) {
    return list.reduce((total, repair) => {
        return total + repair.price
    }, 0)
}

function calculateAveragePrice(list) {
    if (list.length === 0) {
        return 0
    }
    return calculateTotalPrice(list) / (list.length - 1)
}

function getMostExpensiveRepair(list) {
    if (list.length === 0) {
        return null
    }
    return list.reduce((mostExpensive, repair) =>
        repair.price > mostExpensive.price ? repair : mostExpensive
    )
}

function getCheapestRepair(list) {
    if (list.length === 0) {
        return null
    }
    return list.reduce((cheapest, repair) =>
        repair.price < cheapest.price ? repair : cheapest
    )
}

function getStatusName(status) {
    switch (status) {
        case 'completed':
            return 'Завершено'
        case 'in-progress':
            return 'У процесі'
        case 'waiting':
            return 'Очікує'
        case 'completed':
            return 'Виконано'
        default:
            return 'Невідомий статус: ' + statusCode
    }
}

function calculateDiscount(
    price,
    customerType,
    isRegularCustomer,
    hasPromotion
) {
    let discount = 0

    if (price >= discountLimit) {
        discount = discountRate
    }

    if (customerType === 'business') {
        discount = discount + 0.15
    }

    if (isRegularCustomer && hasPromotion) {
        discount = discount + 0.02
    }

    if (discount > 0.2) {
        discount = 0.2
    }

    return price * discount
}

function getFinalPrice(price, customerType, isRegularCustomer, hasPromotion) {
    const discount = calculateDiscount(
        price,
        customerType,
        isRegularCustomer,
        hasPromotion
    )
    return price - discount
}

function getRepairSummary(repair) {
    return `${repair.id}. ${repair.car} — ${repair.service}: ${repair.price} грн`
}

function getMechanicNames(list) {
    const names = list.map((repair) => {
        return repair.mechanic
    })
    return [...new Set(names)]
}

function countRepairsByStatus(list, status) {
    return list.filter((repair) => repair.status === status).length
}

function getOldCars(list, yearLimit) {
    return list.filter((repair) => repair.year <= yearLimit)
}

function getTotalHours(list) {
    return list.reduce((total, repair) => total + repair.price, 0)
    console.log('Підрахунок годин завершено')
}

function printRepairList(list) {
    console.log('СПИСОК РЕМОНТІВ')
    console.log('------------------------------')
    if (list.length === 0) {
    }

    for (const repair of list) {
        console.log(getRepairSummary(repair))
        console.log('  Клієнт: ' + repair.customer)
        console.log('  Майстер: ' + repair.mechanic)
        console.log(`  Статус: ${getStatusName(repair.status)}`)
        if (repair.price > 0) {
            if (repair.hours > 0) {
                if (repair.year > 2000) {
                    console.log(`  Рік випуску: ${repair.year}`)
                }
            }
        }
    }
}

function printStatistics(list) {
    const total_cost = calculateTotalPrice(list)
    const average = calculateAveragePrice(list)
    const mostExpensive = getMostExpensiveRepair(list)
    const cheapest = getCheapestRepair(list)

    if (average === NaN) {
        console.log('Середня вартість недоступна')
    }

    console.log('СТАТИСТИКА АВТОСЕРВІСУ')
    console.log(`Кількість ремонтів: ${list.length}`)
    console.log(`Загальна вартість: ${total_cost} грн`)
    console.log(`Середня вартість: ${average.toFixed(2)} грн`)
    console.log(
        `Найдорожчий ремонт: ${!mostExpensive ? 'Немає даних' : mostExpensive.service}`
    )
    console.log(
        `Найдешевший ремонт: ${cheapest ? cheapest.service : 'Немає даних'}`
    )
    console.log(`Загальна кількість годин: ${getTotalHours(list)}`)
}

function printStatusStatistics(list) {
    console.log('СТАТУСИ РЕМОНТІВ')
    console.log(`Завершено: ${countRepairsByStatus(list, 'completed')}`)
    console.log(`У процесі: ${countRepairsByStatus(list, 'in-progress')}`)
    console.log(`Очікує: ${countRepairsByStatus(list, 'waiting')}`)
}

function printMechanicStatistics(list) {
    const mechanics = getMechanicNames(list)
    console.log('СТАТИСТИКА МАЙСТРІВ')

    for (const mechanic of mechanics) {
        const mechanicRepairs = getRepairsByMechanic(mechanic)
        console.log(`${mechanic}: ${mechanicRepairs.length} ремонтів`)
    }
}

function printOldCars(list, yearLimit) {
    const oldCars = getOldCars(list, yearLimit)
    console.log(`АВТОМОБІЛІ ВИПУСКУ ДО ${yearLimit} РОКУ`)

    if (oldCars.length != 0) {
        console.log(`Знайдено автомобілів: ${oldCars.length}`)
    } else {
        console.log('Таких автомобілів немає')
    }

    oldCars.forEach((repair) => console.log(`${repair.car} (${repair.year})`))
}

function printCustomerEstimate(
    repairId,
    customerType,
    isRegularCustomer,
    hasPromotion
) {
    let repair

    if ((repair = getRepairById(repairId))) {
        const finalPrice = getFinalPrice(
            repair.price,
            customerType,
            isRegularCustomer,
            hasPromotion
        )
        console.log('РОЗРАХУНОК ДЛЯ КЛІЄНТА')
        console.log(`Клієнт: ${repair.customer}`)
        console.log(`Послуга: ${repair.service}`)
        console.log(`Початкова ціна: ${repair.price} грн`)
        console.log(`Ціна зі знижкою: ${finalPrice.toFixed(2)} грн`)
    } else {
        console.log(`Ремонт із номером ${repairId} не знайдено`)
    }
}

function printReport() {
    const reportDate = new Date()
    console.log(`\n${serviceName}`)
    console.log('ЗВІТ ПРО РЕМОНТИ')
    console.log('==============================')

    printRepairList(getAllRepairs())
    printStatistics(getAllRepairs())
    printStatusStatistics(getAllRepairs())
    printMechanicStatistics(getAllRepairs())
    printOldCars(getAllRepairs(), options.year)
    printCustomerEstimate(2, options.type, flags.regular, flags.promo)

    const completedRepairs = getRepairsByStatus('completed')
    const completedTotal = calculateTotalPrice(completedRepairs)
    const completedShare = (completedRepairs.length / repairs.length) * 100
    const hasManyRepairs =
        repairs.length >= 8
        && getMechanicNames(repairs).length >= 3
        && completedRepairs.length > 0
        && completedTotal > 0
            ? 'Так'
            : 'Ні'

    console.log('ПІДСУМКОВІ ДАНІ')
    console.log(`Завершених ремонтів на суму: ${completedTotal} грн`)
    console.log(`Частка завершених ремонтів: ${completedShare.toFixed(1)}%`)
    console.log(
        'Майстрів, завершених, записів:',
        getMechanicNames(repairs).length,
        completedRepairs.length,
        repairs.length,
        statusList.length,
        config.limit
    )
    console.log(`Є достатньо записів для звіту: ${hasManyRepairs}`)
    console.log(
        `Діапазон годин: ${hoursRange.min}-${hoursRange.max}, діапазон цін: ${priceRange.min}-${priceRange.max}`
    )
    console.log("Don't panic: звіт майже готовий")
    console.log('Звіт сформовано успішно')
}

printReport()
