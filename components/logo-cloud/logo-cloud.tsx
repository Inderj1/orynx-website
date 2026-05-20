"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const integrations = [
  { name: "SAP", logo: "/logos/sap.svg", width: 80 },
  { name: "Oracle", logo: "/logos/oracle.svg", width: 110 },
  { name: "Dynamics 365", logo: "/logos/dynamics-365.svg", width: 130 },
  { name: "Salesforce", logo: "/logos/salesforce.svg", width: 120 },
  { name: "NetSuite", logo: "/logos/netsuite.svg", width: 110 },
  { name: "Intuit QuickBooks", logo: "/logos/quickbooks.svg", width: 130 },
  { name: "Workday", logo: "/logos/workday.svg", width: 120 },
  { name: "Sage", logo: "/logos/sage.svg", width: 80 },
  { name: "Xero", logo: "/logos/xero.svg", width: 80 },
  { name: "Zoho", logo: "/logos/zoho.svg", width: 80 },
  { name: "FreshBooks", logo: "/logos/freshbooks.svg", width: 130 },
  { name: "Intuit", logo: "/logos/intuit.svg", width: 80 },
  { name: "Epicor", logo: "/logos/epicor.svg", width: 110 },
  { name: "Infor", logo: "/logos/infor.svg", width: 80 },
  { name: "Odoo", logo: "/logos/odoo.svg", width: 80 },
  { name: "IFS", logo: "/logos/ifs.svg", width: 70 },
  { name: "Snowflake", logo: "/logos/snowflake.svg", width: 120 },
  { name: "Databricks", logo: "/logos/databricks.svg", width: 120 },
  { name: "AWS", logo: "/logos/aws.svg", width: 80 },
  { name: "Azure", logo: "/logos/azure.svg", width: 90 },
]

export function LogoCloud() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Connects to your existing enterprise systems — no data movement required
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
                scale: 0.9,
              }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="grayscale opacity-40 hover:grayscale-0 hover:opacity-70 transition-all duration-300 select-none"
              title={item.name}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={item.width}
                height={32}
                className="h-8 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
