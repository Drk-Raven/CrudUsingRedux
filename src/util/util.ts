/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-community/netinfo'
import groupBy from 'lodash/groupBy'
import get from 'lodash'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import { Dimensions, Linking, PermissionsAndroid } from 'react-native'
import { DATE_FORMAT } from './constants'
import SendIntentAndroid from 'react-native-send-intent'

import { blueColor, grayColor, greenColor, orangeColor, redColor } from '../styles/misc'

interface ObjectLiteral {
  [key: string]: any;
}
const util: ObjectLiteral = {
  netInfo() { return NetInfo.fetch().then(connectionInfo => connectionInfo.type) },
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  validateMobileNo: (mobileNo: string) => {
    const reg = /^(\d{10})$/
    return reg.test(mobileNo)
  },
  calculateHighMamul:(high_mamul: any,system_mamul: any) => {
    const amount = (high_mamul+system_mamul)
    return amount
},
  phoneformater: (number: string) => {
    return number.replace(/\D/g, '').slice(-10)
  },
  limit: 10,
  limit20: 20,
  ton : [
    {id: 1, item: '5'},
    {id: 2, item: '6'},
    {id: 3, item: '6.5'},
    {id: 4, item: '7'},
    {id: 5, item: '7.5'},
    {id: 6, item: '8'},
    {id: 7, item: '9'},
    {id: 8, item: '10'},
    {id: 9, item: '11'},
    {id: 10, item: '12'},
    {id: 11, item: '13'},
    {id: 12, item: '14'},
    {id: 13, item: '15'},
    {id: 14, item: '16'},
    {id: 15, item: '17'},
    {id: 16, item: '18'},
    {id: 17, item: '19'},
    {id: 18, item: '20'},
    {id: 19, item: '21'},
    {id: 20, item: '22'},
    {id: 21, item: '23'},
    {id: 22, item: '24'},
    {id: 23, item: '25'},
    {id: 24, item: '26'},
    {id: 25, item: '27'},
    {id: 26, item: '28'},
    {id: 27, item: '29'},
    {id: 28, item: '30'},
    {id: 29, item: '31'},
    {id: 30, item: '32'},
  ],
  tripStatus: [
    { id: 1, name: 'Waiting for truck' },
    { id: 2, name: 'Assigned' },
    { id: 3, name: 'Confirmed' },
    { id: 4, name: 'Reported at source' },
    { id: 5, name: 'Intransit' },
    { id: 6, name: 'Reported at destination' },
    { id: 7, name: 'Cancelled' },
    { id: 8, name: 'Delivery onhold' },
    { id: 9, name: 'Delivered' },
    { id: 10, name: 'Approval Pending' },
    { id: 11, name: 'POD Verified' },
    { id: 12, name: 'Invoiced' },
    { id: 13, name: 'Invoiced' }, //Recieved
    { id: 14, name: 'Paid' },
    { id: 15, name: 'Paid' } // Closed
  ],
  lrComment: [
  'LR not clear' , 'Wrong LR' ,
  ],
  validatePan: (panNumber: string) => {
    const regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
    return regpan.test(panNumber)
  },
  validateAadhar: (aadharNumber: string) => {
    const regpan = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/
    return regpan.test(aadharNumber)
  },
  get_future_seven_date: () =>{
    const today = moment().format('YYYY-MM-DD HH:mm')
    const future_seventh_day = moment(today).add(7, 'day').format('YYYY-MM-DD HH:mm');
    return future_seventh_day
  },
  get_future_third_date: () =>{
    const today = moment().format('YYYY-MM-DD HH:mm')
    const future_third_day = moment(today).add(3, 'day').format('YYYY-MM-DD HH:mm');
    return future_third_day
  },
  get_future_date: (days:number) =>{
    const today = moment().format('YYYY-MM-DD HH:mm')
    const future_date = moment(today).add(days, 'day').format('YYYY-MM-DD HH:mm');
    return future_date
  },
  validate_special_characters: (name: string) => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let matched_text = format.test(name)
    return matched_text
  },
  get_last_fifth_date: () => {
    var last_fifth_date = new Date();
    last_fifth_date.setDate(last_fifth_date.getDate() - 5);
    return last_fifth_date
  },
  formatDate: (date: any, format?: string) => {
    return date ? moment(date).format(format || DATE_FORMAT) : '-'
  },
  getPlayerId: async () => {
    try {
      const player_id = await AsyncStorage.getItem('player_id')
      return player_id
    } catch (e) {
      console.log('Failed to fetch the player_id', e);
      return null
    }
  },
  getMobile: async () => {
    try {
      const mobile = await AsyncStorage.getItem('mobile_number')
      return mobile ? JSON.parse(mobile) : {};
    } catch (e) {
      console.log('Failed to fetch the mobile');
    }
  },
  callNow: (number: string) => {
    return Linking.openURL('tel:+91' + number)
  },
  avatar: (name: string) => {
    return (
      name
        ? name.split(' ').map((x, i) => {
          if (i < 2) { return x[0] }
        }).join('').toUpperCase()
        : '')
  },
  groupByMultipleProperty: (array: any, f: any) => {
    var groups: any = {};
    array.forEach((o: any) => {
      var group: any = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    })
  },

  role: {
    admin: 'Admin',
    rm: 'RM',
    accounts_manager: 'Accounts Manager',
    billing_manager: 'Billing Manager',
    partner_manager: 'Partner Manager',
    partner_support: 'Partner Support',
    accounts: 'Accounts',
    onboarding: 'Onboarding',
    billing: 'Billing',
    bm: 'BM',
    hr: 'HR',
    user: 'user',
    sourcing: 'Sourcing',
    operations: 'Operations',
    external: 'outsource',
    finance_manager: 'Finance Manager'
  },

  is_roles: (allowed_roles: any, context: any) => {
    const result = context.user.roles.some((role: any) => allowed_roles.includes(role))
    return result
  },
  customerStatus: {
    1: 'Active',
    2: "Registered ",
    3: "Verification ",
    4: "Reverification",
    5: "In-Active",
    6: "Blacklisted",
    7: "Rejected",
    8: "Lead"
  },

  topic: {
    partner_name: 'Partner Name',
    partner_kyc_reject: 'Kyc Rejected',
    onboarded_by: 'Partner OnBoardedBy',
    address: 'Address',
    cibil_score: 'Cibil Score',
    gst: 'GST',
    pan: 'PAN',
    final_payment: 'Partner Final Payment',
    partner_advance_percentage: 'Advance Percentage',
    truck_no: 'Truck Number',
    truck_type: 'Truck Type',
    truck_dimension: 'Truck Dimension',
    truck_driver_number: 'Driver Number',
    truck_deactivation: 'Truck Deactivated',
    truck_activation: 'Truck activated',
    partner_deactivation: 'Partner Deactivated',
    partner_activation: 'Partner activated',
    partner_wallet_block: 'Partner Wallet Blocked',
    partner_wallet_unblock: 'Partner Wallet Unblocked',
    partner_blacklist: 'Partner Blacklisted',
    partner_unblacklist: 'Partner Unblacklisted',
    partner_bank_detail: 'Bank Detail',
    customer_type: 'Customer Type',
    customer_payment_manager: 'Customer Payment Manager',
    customer_exception: 'Customer Exception Date',
    customer_gst: 'Customer Gst',
    customer_onboardedby: 'Customer OnboardedBy',
    managed_customer: 'Managed Customer',
    customer_blacklist: 'Customer Blacklisted',
    customer_unblacklist: 'Customer Unblacklisted',
    customer_branch: 'Customer Branch',
    customer_user: 'Customer User',
    customer_fr8_employee: 'Fr8 Employee',
    customer_reject: 'Customer Reject',
    customer_advance_percentage: 'Customer Advance Percentage',
    billing_comment: 'Billing Comment',
    truck_owner_registration: 'Truck Owner Registration',
    trip_price_change: 'Trip Price Changed',
    single_trip_deactivation_enable: 'Single Trip Deactivation Enabled',
    single_trip_deactivation_disable: 'Single Trip Deactivation Disabled',
    pod_verification: "POD VERIFICATION"
  },

  currentDate: new Date(),

  arrMin: (arr: number[]): number | null => !isEmpty(arr) ? +Math.min(...arr).toFixed(0) : null,
  arrMax: (arr: number[]): number | null => !isEmpty(arr) ? +Math.max(...arr).toFixed(0) : null,
  arrSum: (arr: number[]) => arr.reduce((a, b) => a + b, 0),
  arrAvg: (arr: number[]): number | null => !isEmpty(arr) ? +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(0) : null,
  LightenDarkenColor: (color: string, amount: number) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
  },
  mathCalc: (v1: string, v2: string, type: 'sum' | 'subtract' | 'multiplay' | 'divide' | 'percentage'): string | undefined => { // Use only if value came from form field
    const value1 = (!v1 || v1 === '') ? 0 : +v1
    const value2 = (!v2 || v2 === '') ? 0 : +v2

    if (type === 'sum') { return (value1 + value2).toString() }
    if (type === 'subtract') {
      const result = (value1 - value2)
      return result < 1 ? '0' : result.toString() // negative value changing to 0
    }
    if (type === 'multiplay') {
      return (value1 * (value2 || 1)).toString()
    }
    if (type === 'percentage') {
      return (!value1) ? '0' : Math.ceil((value1 * value2) / 100).toString()
    }
    if (type === 'divide') {
      return (value1 && value2) ? (value1 / value2).toString() : '0'
    }
  },
  getWaitingForLoadMessage: (truck: any, truckCount?: number) => {
    let message = ''
    const truck_destinations = get(truck, 'truck_destinations', [])
    message += `${(typeof truckCount !== 'undefined') ? truckCount + 1 + '. ' : ''}${get(truck, 'partner.name')}`
    message += `${truck.truck_no} ${get(truck, 'truck_type_code')} ${get(truck, 'tat')}hrs ${get(truck, 'partner.primary_mobile_number', '-')} \n`
    message += !isEmpty(truck_destinations) ? `${get(truck, 'city.name', null)} - ` : `${get(truck, 'city.name', null)}\n`
    if (!isEmpty(truck_destinations)) {
      truck_destinations.forEach((truckTrip: any) => { message += ` ${get(truckTrip, 'destination_city.name', null)},` });
      message = message.substring(0, message.length - 1) + '\n'
    }
    message += `${(typeof truckCount !== 'undefined') ? '\n' : ''}`;
    return message
  },
  getWaitingForLoadsMessage: (trucks: any) => {
    const sorted = !isEmpty(trucks) ? trucks.slice().sort((a: any, b: any) => b.tat - a.tat) : []
    const filtered = !isEmpty(sorted) ? sorted.filter((_truck: any) => _truck.tat >= 0) : []
    const grouped = groupBy(filtered, 'truck_type_code')
    let bulkMessage = '';
    !isEmpty(grouped) ? Object.entries(grouped).forEach(([key, _trucks]) => {
      bulkMessage += `${key}\n\n`
      _trucks.forEach((truck, truckCount) => { bulkMessage += util.getWaitingForLoadMessage(truck, truckCount) })
    }) : ''
    return bulkMessage
  },
  stringToNumber: (number: any) => {
    return isNaN(number) ? 0 : parseInt(number, 10)
  },
   isEven:(n:any) => {
    return n % 2 == 0;
 },
 
  isOdd:(n:any) => {
    return Math.abs(n % 2) == 1;
 },
  tripLinkMessage: (data: any) => {
    const message = data.trip_id && `#${data.trip_id} ${data.source} to ${data.destination} ${data.truck_no}
Get Trip details and documents from here:\n\nhttps://book.fr8.in/trip?id=${data.uuid}\n`
    return message
  },
  getTrackingMessage:(truck_info: any, source:string, destinations: any) =>{
    const requestedDestinations =!isEmpty(destinations) ? destinations.filter((destination:any)=> destination.is_request === true) : []
    let message = `${get(truck_info, 'partner.name')} \n`
    message += `${get(truck_info, 'truck_no', null)} - ${get(truck_info, 'truck_type_code')} - ${get(truck_info, 'tat')} hrs\n`
    const owner_number = get(truck_info, 'partner.primary_mobile_number', null)
    message += owner_number ? `O- ${owner_number}\n` : ''
    message += `Source: ${get(source, 'name', null)} \n`
    message += !isEmpty(requestedDestinations) ? `Destination: ${requestedDestinations.map((destination:any)=> destination.name).join(', ')} \n` : ''
    return message
  },
  longitudelatitudeLocation : (location_geo:any) => {
    const splitLocation = location_geo.split(",")
    const latitude = splitLocation[0].replace('(', '')
    const longitude = splitLocation[1].replace(')', '')
    const reversedLocation = `${longitude},${latitude}`
    return reversedLocation
  },
  latitudelongitudeLocation : (location_geo:any) => {
    const splitLocation = location_geo.split(",")
    const latitude = splitLocation[1].replace(')', '')
    const longitude = splitLocation[0].replace('(', '')
    const reversedLocation = `${latitude},${longitude}`
    return reversedLocation
},
messageFormat: (data: any) => {
  const message = 
  `${data.title}\n${data.line1}
${data.line2}
${data.line3}
${data.line4}
${data.line5}
${data.line6}\n
Cheers,
Team FR8
${data.footer}`
  return message
},
removeSpaceAndCharatersFromMobile: (value: string) => {
  var mobile = '';
  if (value && value.charAt(0) == '+' || value && value.charAt(0) == '0') {
    mobile = value && value.replace(/[^a-zA-Z0-9+]/g, "").substr(3);
  }
  else {
    mobile = value && value.replace(/[^a-zA-Z0-9]/g, "");
  }
  return mobile
} ,
swapLatLng: (truckLocation: string) => {
  const splitLocation = truckLocation.split(",")
  const longitude = splitLocation[1]
  const latitude = splitLocation[0]
  const truckLngLat = `${longitude},${latitude}`
  return truckLngLat
},

removeparenthesis: (getCalculatedDistance: string) => {
  const longitude = getCalculatedDistance.replace('(', '')
  const latitude = longitude.replace(')', '')
  return latitude
} , validateTruckNo(truckNumber: string) {
  const regex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/
return regex.test(truckNumber)
},
requestCallPhone: async (mobile:string) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE, {
      'title': 'App Call Phone Permission',
      'message': 'App needs access to your call phone feature',
      'buttonPositive':'OK'
    }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      SendIntentAndroid.sendPhoneCall(mobile)

    } else {
      console.log("Call Phone permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
},
getCustomerStatusIcon(status_id: number) {
  const customerStatusIcon : any = {
    1: { icon: 'checkcircle', color: greenColor },
    5: { icon: 'closecircle', color: orangeColor },
    6: { icon: 'minuscircle', color: redColor },
  }
  return customerStatusIcon[status_id]
},
shareWhatsappMessages(message: string, number: number) {
  return Linking.openURL(`whatsapp://send?text=${message}&phone=+91${number}`)
},
countConverter: (count: string | number) => {
  if (+count > 99) {
    count = "99+"
  }
  return count != null ? count.toString():"0"
},
getWhatsappMessagesStatusIcon(item:any){
  
  const success = {icon: 'checkcircle', color: greenColor};
  const failed = {icon: 'closecircle', color: redColor};
  const pending = {icon: 'clockcircle', color: orangeColor};
  const un_sent = {icon: 'checkcircle', color: grayColor};

  const status_cases:any = {
    'FAILED' : failed,
    'READ' : success,
    'SENT' : success,
    'ACCEPTED' : success,
    'DELIVERED' : success,
    'IN_PROGRESS' : pending,
    'DEFAULT' : un_sent
  }


    return status_cases[item?.status] || status_cases['DEFAULT']
  },
  shiftTime: moment("00:00", 'HH:mm'),
  mrngShift: moment("08:00", 'HH:mm'),
  diff: (from: Date, to: Date) => (to.valueOf() - from.valueOf()) / 864e5,
  
  findCreatedBy(updated_by:String){
    //This function returns true if created by partner is true
    const created_by = updated_by !=null && updated_by!=" " ? updated_by.split('@') : null
    const get_created_by = created_by? created_by[0]:null
    const check = get_created_by ? /^\d+$/.test(get_created_by) : false
    return check
  },
  checkAllocateType(id: number){
    const status: any = {
        1: 'Chat',
        2: 'Fixed price'
    }
    return status[id] || false
  },
  trucncate: (data: string, length: number) => data && data.length > length ? data.slice(0, length) + '...' : data,

}

// PARTNER STATUS
export const VERIFICATION = 'Verification'
export const REGISTERED = 'Registered'
export const REVERIFICATION = 'Reverification'
export const ACTIVE = 'Active'
export const UNAUTHORIZED = 'Un-Authorized'
export const LEAD = 'Lead'

// TICKET STATUSES
export const TICKET_OPEN = 'open'
export const TICKET_CLOSED = 'closed'

// TRANSACTION STATUS
export const COMPLETED = 'COMPLETED'
export const PENDING = 'PENDING'
export const FAILED = 'FAILED'


// TRANSACTION MODE
export const PAID_TO_BANK = 'Paid To Bank'
export const REVERSED_TO_BANK = 'Reversal( Paid To Bank )'

// ATTENDANCE MODULE
export const FULL_DAY = 1
export const HALF_DAY = 0.5
export const leaveType = [FULL_DAY, HALF_DAY]

// !! DO NOT ADD CONSTANTS HERE !!

export default util
