const baseUrl = "http://localhost:8088"
const employeesUrl = `${baseUrl}/employees?_expand=department&_expand=computer`



const createEmployee = {

    getEmployeeObject () {
        fetch(employeesUrl)
            .then(resp => resp.json())
            .then(employees => {
                employees.forEach(employee => {
                    this.renderEmployeeCardHTML(employee)
                });
            });

    },

    renderEmployeeCardHTML (employee) {
        const container = document.getElementById('employeeCards')


        container.innerHTML += `
        <article class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employee.department.name} department
            </section>
            <section class="employee__computer">
                Currently using a ${employee.computer.year} ${employee.computer.make} ${employee.computer.model}
            </section>
        </article> 
        `

    }
}
createEmployee.getEmployeeObject()

    