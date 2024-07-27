// // functions that are flexible to any perimeter

/* union */
// // Specifying which type for a variable
// type IDFieldType = string | number

// const printID = (id: IDFieldType) => {
//   console.log('id: ' + id)
// }

// printID(123123123)

/* intersection:
combine the attrbutes of multiple objects
*/

interface BusinessPartner {
  name: string
  creditScore: number
}

interface UserIdentity {
  id: number
  email: string
}

type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee) => {
  console.log(
    'contract signed by ' + employee.name + ' with email: ' + employee.email
  )
}

signContract({
  name: 'wow',
  creditScore: 1,
  id: 2,
  email: 'emailmoto',
})
